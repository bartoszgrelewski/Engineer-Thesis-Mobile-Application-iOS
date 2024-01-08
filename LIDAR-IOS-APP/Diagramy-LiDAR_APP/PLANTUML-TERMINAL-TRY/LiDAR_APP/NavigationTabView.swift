//
//  NavigationTabView.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 19/11/2023.
//

import SwiftUI

struct NavigationOptionView: View {
  @Environment(\.colorScheme)
  var colorScheme

  let title: String
  let description: String
  var body: some View {
    HStack {
      VStack(alignment: .leading, spacing: 4) {
        HStack {
          Text(title)
            .font(.headline)
            .foregroundColor(colorScheme == .dark ? Color.white : Color.black)
          Spacer()
        }
        Text(description)
          .font(.subheadline)
          .multilineTextAlignment(.leading)
          .foregroundColor(.gray)
      }
      Image(systemName: "chevron.right")
        .foregroundColor(colorScheme == .dark ? Color.white : Color.black)
        .padding([.leading, .trailing], 8)
    }
    .padding(.leading, 8)
  }
}

struct NavigationOptionView_Previews: PreviewProvider {
  static var previews: some View {
    Group {
      NavigationOptionView(
        title: "Title",
        description: "A descriptive text of what the view behind the navigation option is about."
      )
      .previewLayout(.sizeThatFits)
      .preferredColorScheme(.light)
      .previewDisplayName("Light Mode")

      NavigationOptionView(
        title: "Title",
        description: "A descriptive text of what the view behind the navigation option is about."
      )
      .previewLayout(.sizeThatFits)
      .preferredColorScheme(.dark)
      .previewDisplayName("Dark Mode")
    }
  }
}
