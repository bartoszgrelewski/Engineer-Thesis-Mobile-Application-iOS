//
//  MenuView.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 19/11/2023.
//

import SwiftUI

struct ContentView: View {
    @State var selected = false
    
    var body: some View {
        NavigationView {
            VStack(spacing: 30) {
                NavigationLink(
                    destination: {
                        RoomCaptureScanView()
                    },
                    label: {
                        NavigationOptionView(
                            title: "Skanuj pomieszczenia 3d",
                            description: "Zacznij skan pomieszczenia rozpoczynajac od dowolonego wierzcholka sciany."
                        )
                    })
                NavigationLink(
                    destination: {
                        LidarDepthView()

                    },
                    label: {
                        NavigationOptionView(
                            title: "Odczyty LiDAR",
                            description: "Przejdz do widokow bezposrednio z modułu. Zobacz wizualizacje odczytow bezposrednio."
                        )
                    })
                NavigationLink(
                    destination: {
                        MyProjectsViewControllerRepresentable()
                        
                    },
                    label: {
                        NavigationOptionView(
                            title: "Moje projekty",
                            description: "Historia skanów 3D za pomocą aplikacji."
                        )
                    })
                Spacer()
            }
            .padding(.top, 20)
            .navigationTitle("Menu aplikacji")
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

