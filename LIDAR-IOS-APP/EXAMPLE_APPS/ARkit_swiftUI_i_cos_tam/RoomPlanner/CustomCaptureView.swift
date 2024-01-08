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
import RoomPlan
import SwiftUI

class CustomCaptureView: ARView {
  private var cancellables: Set<AnyCancellable> = []
  @ObservedObject private var viewModel: ARViewModel
  private let captureSession = RoomCaptureSession()
  private var capturedRoom: CapturedRoom?

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
    captureSession.delegate = self
    self.session = captureSession.arSession
    self.cameraMode = .ar

    viewModel.actions
      .sink { [weak self] action in
        switch action {
        case .startSession:
          self?.startSession()
        case .placeBlock:
          self?.placeBlockOnTables()
        case .removeAllBlocks:
          self?.removeAllBlocks()
        case .export:
          break
        }
      }
      .store(in: &cancellables)
  }

  private func startSession() {
    captureSession.run(configuration: RoomCaptureSession.Configuration())
  }

  private func placeBlockOnTables() {
    guard let capturedRoom else { return }
    let tables = capturedRoom.objects.filter { $0.category == .table }
    for table in tables {
      placeBlock(onTable: table)
    }
  }

  private func placeBlock(onTable table: CapturedRoom.Object) {
    let block = MeshResource.generateBox(size: 0.1)
    let material = SimpleMaterial(color: .black, isMetallic: false)
    let entity = ModelEntity(mesh: block, materials: [material])

    let tableMatrix = table.transform
    let tableHeight = table.dimensions.y

    let translation = simd_float4x4(
      SIMD4<Float>(1, 0, 0, 0),
      SIMD4<Float>(0, 1, 0, 0),
      SIMD4<Float>(0, 0, 1, 0),
      SIMD4<Float>(0, (tableHeight / 2), 0, 1)
    )

    let boxMatrix = translation * tableMatrix

    let anchor = AnchorEntity()
    anchor.transform = Transform(matrix: boxMatrix)
    anchor.addChild(entity)

    scene.addAnchor(anchor)

    DispatchQueue.main.async {
      self.viewModel.canDeleteBlocks = true
    }
  }

  private func removeAllBlocks() {
    scene.anchors.removeAll()
    DispatchQueue.main.async {
      self.viewModel.canDeleteBlocks = false
    }
  }
}

// MARK: - RoomCaptureSessionDelegate
extension CustomCaptureView: RoomCaptureSessionDelegate {
  func captureSession(_ session: RoomCaptureSession, didUpdate: CapturedRoom) {
    capturedRoom = didUpdate
    DispatchQueue.main.async {
      self.viewModel.canPlaceBlock = didUpdate.objects.contains {
        $0.category == .table
      }
    }
  }
}

struct CustomCaptureViewRepresentable: UIViewRepresentable {
  @ObservedObject var viewModel: ARViewModel

  func makeUIView(context: Context) -> CustomCaptureView {
    return CustomCaptureView(viewModel: viewModel, frame: UIScreen.main.bounds)
  }

  func updateUIView(_ uiView: CustomCaptureView, context: Context) { }
}
