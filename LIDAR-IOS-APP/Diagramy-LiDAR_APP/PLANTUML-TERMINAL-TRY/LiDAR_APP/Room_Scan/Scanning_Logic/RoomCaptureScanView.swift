//
//  RoomCaptureScanView.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 20/11/2023.
//
import SwiftUI
import _SpriteKit_SwiftUI
import AVFoundation
import UIKit

struct RoomCaptureScanView: View {
    private let model = RoomCaptureModel.shared

    @State private var isScanning = false
    @State private var isShowingFloorPlan = false
    
    var body: some View {
        ZStack {
            RoomCaptureRepresentable()
                .ignoresSafeArea()
            
            VStack {
                Spacer()
                Button(isScanning ? "Zakończ" : "Zapisz plik") {
                    if isScanning {
                        stopSession()
                    } else {
                        exportFun()
                        isShowingFloorPlan = true
                    }
                }
                .padding()
                .background(Color("AccentColor"))
                .foregroundColor(.white)
                .clipShape(Capsule())
                .fontWeight(.bold)
                .padding(.bottom)
            }
        }
        .onAppear {
            startSession()
        }
    }
    
    
    private func startSession() {
        isScanning = true
        model.startSession()
        UIApplication.shared.isIdleTimerDisabled = true
    }
    
    private func stopSession() {
        isScanning = false
        model.stopSession()
        UIApplication.shared.isIdleTimerDisabled = false
    }
    
    private func exportFun() {
        guard model.finalRoom != nil else {return}
        var fm = FileManager.default
        var path = fm.urls(for: .documentDirectory, in: .userDomainMask).first!
        let fileName = "\("S" + UUID().uuidString).usdz"
        path.appendPathComponent(fileName)
        do{
            try model.finalRoom?.export(to: path.absoluteURL)
        }
        catch{
            print(error)
        }
    }
}

struct RoomCaptureScanView_Previews: PreviewProvider {
    static var previews: some View {
        RoomCaptureScanView()
    }
}
