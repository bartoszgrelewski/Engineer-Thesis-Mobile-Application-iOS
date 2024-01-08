//
//  ModelCell.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 25/11/2023.
//

import Foundation
import UIKit
import SceneKit

class ModelCell: UITableViewCell {
    
    var modelPreviewView: SCNView!
    var creationDate: UILabel!
    var modelName: UILabel!
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        modelPreviewView = SCNView()
        creationDate = UILabel()
        modelName = UILabel()
        
        contentView.addSubview(modelPreviewView)
        contentView.addSubview(creationDate)
        contentView.addSubview(modelName)
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        let width = contentView.frame.width
        let height = contentView.frame.height
        
        modelPreviewView.frame = CGRect(x: 0, y: 0, width: height, height: height)
        creationDate.frame = CGRect(x: height, y: 0, width: width - height, height: height/2)
        modelName.frame = CGRect(x: height, y: height/2, width: width - height, height: height/2)
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        
    }
    func updateCell(path: String,modelName: String,creationDate: String){
        self.modelName = UILabel()
        self.modelName.text = modelName
        addSubview(self.modelName)
        
        guard let url = URL(string: path) else {
            print("Invalid URL for the model")
            return
        }
        
        do {
            let model = try SCNScene(url: url)
            model.background.contents = UIColor.gray
            modelPreviewView.allowsCameraControl = true
            
            let lightnode = SCNNode()
            lightnode.light = SCNLight()
            
            lightnode.light?.type = .directional
            lightnode.position = SCNVector3(x: 0, y: 10, z: 20)
            lightnode.light?.color = #colorLiteral(red: 0.4745098054, green: 0.8392156959, blue: 0.9764705896, alpha: 1)
            model.rootNode.addChildNode(lightnode)
            modelPreviewView.scene = model
            self.modelName.text = modelName
            self.creationDate.text = creationDate
            
        } catch {
            print("Failed to load model: \(error)")
        }
        
        
    }
}
