/// Copyright (c) 2023 Kodeco Inc.
/// 
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
/// 
/// The above copyright notice and this permission notice shall be included in
/// all copies or substantial portions of the Software.
/// 
/// Notwithstanding the foregoing, you may not use, copy, modify, merge, publish,
/// distribute, sublicense, create a derivative work, and/or sell copies of the
/// Software in any work that is designed, intended, or marketed for pedagogical or
/// instructional purposes related to programming, coding, application development,
/// or information technology.  Permission for such use, copying, modification,
/// merger, publication, distribution, sublicensing, creation of derivative works,
/// or sale is expressly withheld.
/// 
/// This project and source code may use libraries or frameworks that are
/// released under various Open-Source licenses. Use of those libraries and
/// frameworks are governed by their own individual licenses.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
/// THE SOFTWARE.

import Combine
import RealityKit
import SwiftUI

class CustomARView: ARView {
  private var cancellables: Set<AnyCancellable> = []
  @ObservedObject private var viewModel: ARViewModel

  init(viewModel: ARViewModel, frame: CGRect) {
    self.viewModel = viewModel
    super.init(frame: frame)
    setup()
  }

  @MainActor
  required dynamic init(frame frameRect: CGRect) {
    fatalError("init(frame:) has not been implemented")
  }

  @MainActor
  required dynamic init?(coder decoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  private func setup() {
    viewModel.actions
      .sink { [weak self] action in
        switch action {
        case .startSession:
          break
        case .placeBlock:
          self?.placeBlock()
        case .removeAllBlocks:
          self?.removeAllBlocks()
        case .export:
          break
        }
      }
      .store(in: &cancellables)
    DispatchQueue.main.async {
      self.viewModel.canPlaceBlock = true
    }
  }

  private func placeBlock() {
    #if targetEnvironment(simulator)
    #else
    let block = MeshResource.generateBox(size: 0.1)
    let material = SimpleMaterial(color: .black, isMetallic: false)
    let entity = ModelEntity(mesh: block, materials: [material])

    let anchor = AnchorEntity(plane: .horizontal)
    anchor.addChild(entity)

    scene.addAnchor(anchor)

    DispatchQueue.main.async {
      self.viewModel.canDeleteBlocks = true
    }
    #endif
  }

  private func removeAllBlocks() {
    scene.anchors.removeAll()
    DispatchQueue.main.async {
      self.viewModel.canDeleteBlocks = false
    }
  }
}

struct CustomARViewRepresentable: UIViewRepresentable {
  @ObservedObject var viewModel: ARViewModel

  func makeUIView(context: Context) -> CustomARView {
    return CustomARView(viewModel: viewModel, frame: UIScreen.main.bounds)
  }

  func updateUIView(_ uiView: CustomARView, context: Context) { }
}
