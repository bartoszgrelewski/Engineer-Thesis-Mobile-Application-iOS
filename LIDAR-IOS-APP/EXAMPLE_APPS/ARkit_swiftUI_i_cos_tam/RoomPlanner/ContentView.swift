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
/// instructional purposes related to programming, coding,s application development,
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

import SwiftUI

struct ContentView: View {
	@StateObject var customARViewModel = ARViewModel()
	@StateObject var roomCaptureViewModel = ARViewModel()
	@StateObject var customCaptureViewModel = ARViewModel()

	var body: some View {
		NavigationView {
			VStack(spacing: 30) {
				NavigationLink(
					destination: {
						CustomARViewRepresentable(viewModel: customARViewModel)
							.ignoresSafeArea()
							.overlay(alignment: .bottom) {
								ButtonOverlay(viewModel: customARViewModel)
							}
					},
					label: {
						NavigationOptionView(
							title: "Custom AR View",
							description: "Use a custom ARView to place and remove blocks on any horizontal plane."
						)
					})
				NavigationLink(
					destination: {
						RoomCaptureViewRepresentable(viewModel: roomCaptureViewModel)
							.ignoresSafeArea()
							.overlay(alignment: .bottom) {
								ButtonOverlay(viewModel: roomCaptureViewModel)
							}
							.onAppear {
								roomCaptureViewModel.actions.send(.startSession)
							}
							.sheet(isPresented: $roomCaptureViewModel.showShareSheet) {
								ActivityViewControllerRep(items: [roomCaptureViewModel.exportUrl])
							}
					},
					label: {
						NavigationOptionView(
							title: "Room Capture View",
							description: "Explore Apple's ready-to-use RoomCaptureView to scan a room and export the resulting model."
						)
					})
				NavigationLink(
					destination: {
						CustomCaptureViewRepresentable(viewModel: customCaptureViewModel)
							.ignoresSafeArea()
							.overlay(alignment: .bottom) {
								ButtonOverlay(viewModel: customCaptureViewModel)
							}
							.onAppear {
								customCaptureViewModel.actions.send(.startSession)
							}
					},
					label: {
						NavigationOptionView(
							title: "Custom Capture Session",
							description: "Combine ARView & RoomCaptureSession to add context to the room & place blocks only on tables."
						)
					})
				Spacer()
			}
			.padding(.top, 20)
			.navigationTitle("Navigation")
		}
		.tint(Color(red: 255 / 255, green: 90 / 255, blue: 0))
	}
}

struct ContentView_Previews: PreviewProvider {
	static var previews: some View {
		ContentView()
			.previewLayout(.sizeThatFits)
			.preferredColorScheme(.dark)
	}
}
