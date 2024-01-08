//
//  SelectedProjectView.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 25/11/2023.
//

import SwiftUI
import SceneKit
import _SpriteKit_SwiftUI
import RoomPlan

struct SelectedProjectView: View {
    private let model = RoomCaptureModel.shared
    @State private var selectedButton: Int? = 3
    @State private var isShowingFloorPlan = false
    var filePath: String
    
    var body: some View {
        VStack {
            SceneKitView(path: filePath, configureUI: selectedButton ?? 3)
                .frame(maxWidth: CGFloat.infinity, maxHeight: CGFloat.infinity)
                .ignoresSafeArea()
            
            HStack {
                Group {
                    Button("WireFrame") {
                        selectedButton = 1
                    }
                    .buttonStyle(CustomButtonStyle(isSelected: selectedButton == 1))
                    
                    Divider().frame(height: 30)
                    
                    Button("Ambient") {
                        selectedButton = 2
                        
                    }
                    .buttonStyle(CustomButtonStyle(isSelected:  selectedButton == 2))
                    
                    Divider().frame(height: 30)
                    
                    Button("Default") {
                        selectedButton = 3
                    }
                    .buttonStyle(CustomButtonStyle(isSelected: selectedButton == 3))
                    
                    Divider().frame(height: 30)
                    
                    Button("2D Print") {
                        isShowingFloorPlan = true
                        selectedButton = 4
                    }
                    .buttonStyle(CustomButtonStyle(isSelected: selectedButton == 4))
                }
            }
            .frame(maxWidth: .infinity)
            .padding()
            .clipShape(Capsule())
            .background(Color.white)
            .shadow(radius: 3)
            .fontWeight(.bold)
            .padding(.bottom)
            .ignoresSafeArea()
        }
        .fullScreenCover(isPresented: $isShowingFloorPlan) {
            if let capturedRoom = model.finalRoom  {
                ZStack {
                    SpriteView(scene: FloorPlanScene(capturedRoom: capturedRoom))
                        .ignoresSafeArea()
                    
                    // Dismiss button
                    VStack {
                        HStack {
                            Spacer()
                            Button(action: {
                                isShowingFloorPlan = false
                            }) {
                                Image(systemName: "xmark.circle.fill")
                                    .font(.largeTitle)
                                    .padding()
                            }
                        }
                        Spacer()
                    }
                }
            } else {
                // Provide an alternative view or handling for when capturedRoom is nil
                Text("No floor plan data available")
            }
        }
    }
}


struct CustomButtonStyle: ButtonStyle {
    
    var isSelected: Bool
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding()
            .background(isSelected ? Color("AccentColor") : Color.clear)
            .foregroundColor(isSelected ? .white : .black)
            .clipShape(Capsule())
            .overlay(
                Capsule()
                    .stroke(Color.gray, lineWidth: 1)
            )
            .scaleEffect(configuration.isPressed ? 0.9 : 1.0)
    }
}

struct SceneKitView: UIViewRepresentable {
    var path: String
    var configureUI: Int
    var capturedRoom: CapturedRoom?
    var type: SCNLight.LightType! = .ambient
    
    
    func makeUIView(context: Context) -> SCNView {
        
        // root of SCN
        let model = try! SCNScene(url: URL(string: path)!)
        // View beyond hierarchy of SCN
        let modelViewer = SCNView()
        // SCN light settings
        let lightNode = SCNNode()
        
        lightNode.light = SCNLight()
        lightNode.light?.color = UIColor.lightGray
        lightNode.position = SCNVector3(x: 150, y: 10, z: 100)
        model.rootNode.addChildNode(lightNode)
        
        modelViewer.allowsCameraControl = true
        modelViewer.scene = model
        
        return modelViewer
    }
    
    func updateUIView(_ uiView: SCNView, context: Context) {
        guard let scene = uiView.scene else {
            return
        }
        uiView.debugOptions = []
        
        scene.rootNode.enumerateChildNodes { (node, _) in
            if node.light != nil || node.animationKeys.contains("colorChangeAnimation") {
                node.removeAllAnimations()
                node.removeFromParentNode()
            }
        }
        
        switch configureUI {
        case 1:
            scene.rootNode.enumerateChildNodes { (node, _) in
                node.geometry?.firstMaterial?.fillMode = .lines
            }
            let directionalLightNode = SCNNode()
            directionalLightNode.light = SCNLight()
            directionalLightNode.light?.type = .ambient
            directionalLightNode.light?.color = UIColor.white
            directionalLightNode.position = SCNVector3(x: 150, y: 10, z: 100)
            scene.rootNode.addChildNode(directionalLightNode)
            scene.background.contents = UIColor.black
            break
        case 2:
            let directionalLightNode = SCNNode()
            directionalLightNode.light = SCNLight()
            directionalLightNode.light?.type = .directional
            directionalLightNode.light?.color = UIColor.white
            directionalLightNode.light?.castsShadow = true
            directionalLightNode.orientation = SCNQuaternion(x: -1, y: 0, z: 0, w: Float.pi / 3)
            directionalLightNode.position = SCNVector3(x: 0, y: 10, z: 10)
            scene.rootNode.addChildNode(directionalLightNode)
            scene.rootNode.enumerateChildNodes { (node, _) in
                node.geometry?.firstMaterial?.fillMode = .fill
            }
            scene.background.contents = UIColor.gray
            break
        case 3:
            
            for _ in 1...5 {
                let lightNode = SCNNode()
                lightNode.light = SCNLight()
                lightNode.light?.type = .omni
                lightNode.position = SCNVector3(0, 10, 0)
                scene.rootNode.addChildNode(lightNode)
                
                let colors = [UIColor.red, UIColor.green, UIColor.blue, UIColor.cyan, UIColor.yellow, UIColor.magenta, UIColor.orange, UIColor.purple]
                let colorAction = SCNAction.customAction(duration: 8) { (node, elapsedTime) -> Void in
                    let percentage = CGFloat(elapsedTime) / 8.0
                    let colorIndex = Int(percentage * CGFloat(colors.count)) % colors.count
                    (node.light?.color = colors[colorIndex])
                }
                
                let moveAction = SCNAction.repeatForever(SCNAction.sequence([
                    SCNAction.move(by: SCNVector3(10, 0, 10), duration: 2),
                    SCNAction.move(by: SCNVector3(-10, 0, 10), duration: 2),
                    SCNAction.move(by: SCNVector3(-10, 0, -10), duration: 2),
                    SCNAction.move(by: SCNVector3(10, 0, -10), duration: 2)
                ]))
                
                let groupAction = SCNAction.group([colorAction, moveAction])
                lightNode.runAction(groupAction)
            }
            scene.background.contents = UIColor.systemBackground
            break
        case 4:
            
            break
        default:
            print("nil")
        }
    }
}


struct SelectedProjectView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationStack {
        }
    }
    
}

