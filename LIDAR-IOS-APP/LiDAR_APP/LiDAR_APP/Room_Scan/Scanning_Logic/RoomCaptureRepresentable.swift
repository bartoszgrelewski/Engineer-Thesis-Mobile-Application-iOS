//
//  RoomCaptureRepresentable.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 20/11/2023.
//

import RoomPlan
import SwiftUI


struct RoomCaptureRepresentable: UIViewRepresentable {
    
    func makeUIView(context: Context) -> RoomCaptureView {
        return RoomCaptureModel.shared.roomCaptureView
    }
    func updateUIView(_ uiView: RoomCaptureView, context: Context) {
    }
    
}
