//
//  MyProjectsViewControllerRepresentable.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 25/11/2023.
//

import SwiftUI

struct MyProjectsViewControllerRepresentable: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> MyProjectsView {
        return MyProjectsView()
    }

    func updateUIViewController(_ uiViewController: MyProjectsView, context: Context) {
    }
}
