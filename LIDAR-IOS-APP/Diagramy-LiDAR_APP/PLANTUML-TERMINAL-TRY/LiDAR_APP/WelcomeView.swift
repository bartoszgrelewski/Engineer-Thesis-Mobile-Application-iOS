//
//  AppMain.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 19/11/2023.
//

import SwiftUI


struct WelcomeView: View {
    
    var body: some View {
        VStack {
            Image(systemName: "house.fill")
                .imageScale(.large)
                .scaleEffect(3)
                .foregroundColor(.accentColor)
                .padding(.bottom, 24)
                .symbolEffect(.pulse)
            
            Text("LiDAR Room Scanner")
                .font(.title)
                .fontWeight(.bold)
            Text("Let's start your journey!")
            
            Spacer()
                .frame(height: 50)
            
            NavigationLink("Launch Application") {
                ContentView()
            }
            .padding()
            .background(Color("AccentColor"))
            .foregroundColor(.white)
            .clipShape(Capsule())
            .fontWeight(.bold)
        }
        
    }
}

struct WelcomeView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationStack {
            WelcomeView()
        }
    }
}
