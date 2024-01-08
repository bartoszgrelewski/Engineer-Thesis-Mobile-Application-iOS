

import SwiftUI

struct DepthOverlay: View {
    
    @ObservedObject var manager: CameraManager
    @State private var opacity = Float(0.5)
    @Binding var maxDepth: Float
    @Binding var minDepth: Float
    
    var body: some View {
        if manager.dataAvailable {
            VStack {
                SliderDepthBoundaryView(val: $opacity, label: "Opacity", minVal: 0, maxVal: 1)
                ZStack {
                    MetalTextureViewColor(
                        rotationAngle: rotationAngle,
                        capturedData: manager.capturedData
                    )
                    MetalTextureDepthView(
                        rotationAngle: rotationAngle,
                        maxDepth: $maxDepth,
                        minDepth: $minDepth,
                        capturedData: manager.capturedData
                    )
                        .opacity(Double(opacity))
                }
            }
        }
    }
}
