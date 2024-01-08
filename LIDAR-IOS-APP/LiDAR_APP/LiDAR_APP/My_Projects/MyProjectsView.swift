//
//  MyProjectsView.swift
//  LiDAR_APP
//
//  Created by Bartosz Grelewski on 24/11/2023.
//

import SwiftUI
import UIKit
import RoomPlan

class MyProjectsView: UITableViewController {
    
    var scannedModels = [ScannedModel]()
    var dates = [String]()
    
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        getFilePaths()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.scannedModels.removeAll()
        tableView.register(ModelCell.self, forCellReuseIdentifier: "CELL")
        
    }
    
    func getFilePaths(){
        let fm = FileManager.default
        let path = fm.urls(for: .documentDirectory, in: .userDomainMask).first!
        do{
            let content = try fm.contentsOfDirectory(atPath: path.path)
            for c in content{
                self.scannedModels.append(ScannedModel(filePath: path.appendingPathComponent(c).absoluteString, creationDate: "\(try! fm.attributesOfItem(atPath: path.appendingPathComponent(c).path)[.creationDate] as? NSDate)"))
            }
        }
        catch{
            print(error)
        }
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        super.tableView(tableView, numberOfRowsInSection: section)
        return scannedModels.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        super.tableView(tableView, cellForRowAt: indexPath)
        let cell = tableView.dequeueReusableCell(withIdentifier: "CELL") as! ModelCell
        cell.updateCell(path: scannedModels[indexPath.row].filePath, modelName: (scannedModels[indexPath.row].filePath as NSString).lastPathComponent,creationDate: self.getFileCreationDate(path: URL(string:  scannedModels[indexPath.row].filePath)!)!)
        return cell
    }
    override func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        super.tableView(tableView, heightForRowAt: indexPath)
        return view.frame.height/4
    }
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let filePath = scannedModels[indexPath.row].filePath
        let selectedProjectView = SelectedProjectView(filePath: filePath)
        let hostingController = UIHostingController(rootView: selectedProjectView)
        self.navigationController?.pushViewController(hostingController, animated: true)
    }
}

extension MyProjectsView{
    func getFileCreationDate(path: URL) -> String?{
        do{
            if let date = try FileManager.default.attributesOfItem(atPath: path.path(percentEncoded: false))[.creationDate] as? Date{
                let formatter = DateFormatter()
                formatter.dateFormat = "MM/dd/yyyy"
                
                return formatter.string(from: date)
            }
        }
        catch{
            print(error)
        }
        return nil
    }
}
