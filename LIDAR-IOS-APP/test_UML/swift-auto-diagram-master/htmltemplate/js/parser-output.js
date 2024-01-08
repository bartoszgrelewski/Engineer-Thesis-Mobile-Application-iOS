var entities = [{
  "id": 1,
  "typeString": "struct",
  "properties": [
    {
  "name": "let filePath: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let creationDate: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScannedModel"
},{
  "id": 2,
  "typeString": "class",
  "properties": [
    {
  "name": "var modelPreviewView: SCNView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var creationDate: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var modelName: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setSelected(_ selected: Bool, animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateCell(path: String,modelName: String,creationDate: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ModelCell",
  "superClass": 68
},{
  "id": 3,
  "typeString": "class",
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    70
  ],
  "name": "AppDelegate",
  "superClass": 69
},{
  "id": 4,
  "typeString": "class",
  "properties": [
    {
  "name": "var scannedResultTV: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scannedModels",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dates",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "scanBtnPressed()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getFilePaths()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ViewController",
  "superClass": 71,
  "extensions": [
    5,
    6
  ]
},{
  "id": 7,
  "typeString": "class",
  "properties": [
    {
  "name": "var doorCountLbl: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var wallCountLbl: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var openingCountLbl: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var roomBuilder",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var roomScannerView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var roomCaptureView: RoomCaptureView!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var roomCaptureSessionConfiguration: RoomCaptureSession.Configuration",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var finalResult: CapturedRoom?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var exportBtn: UIButton! @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopScanning()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupRoomCapture()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "startSession()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "exportBtnPressed(_ sender: Any)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RoomScannerVC",
  "superClass": 71,
  "extensions": [
    8,
    9
  ]
},{
  "id": 10,
  "typeString": "class",
  "properties": [
    {
  "name": "var model: SCNScene!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var optionsSegmentControl: UISegmentedControl!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var type: SCNLight.LightType!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var modelViewer: SCNView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var modelFilePath: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureUI()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didSegmentValueChange(_ sender: UISegmentedControl)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ModelViewerVC",
  "superClass": 71
},{
  "id": 11,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidDisconnect(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidBecomeActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillResignActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillEnterForeground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidEnterBackground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SceneDelegate",
  "superClass": 69
},{
  "id": 12,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body: some Scene",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScannerLidarAppMain",
  "superClass": 72
},{
  "id": 13,
  "typeString": "struct",
  "properties": [
    {
  "name": "let model",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedButton: Int?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isShowingFloorPlan",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var filePath: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let capturedRoom",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SelectedProjectView",
  "superClass": 73
},{
  "id": 14,
  "typeString": "struct",
  "properties": [
    {
  "name": "var isSelected: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeBody(configuration: Configuration) -> some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CustomButtonStyle",
  "superClass": 74
},{
  "id": 15,
  "typeString": "struct",
  "properties": [
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var configureUI: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var capturedRoom: CapturedRoom?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var type: SCNLight.LightType!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeUIView(context: Context) -> SCNView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateUIView(_ uiView: SCNView, context: Context)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SceneKitView",
  "superClass": 75
},{
  "id": 16,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "SelectedProjectView_Previews",
  "superClass": 76
},{
  "id": 17,
  "typeString": "struct",
  "methods": [
    {
  "name": "makeUIViewController(context: Context) -> MyProjectsView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateUIViewController(_ uiViewController: MyProjectsView, context: Context)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MyProjectsViewControllerRepresentable",
  "superClass": 77
},{
  "id": 18,
  "typeString": "struct",
  "properties": [
    {
  "name": "let filePath: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let creationDate: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScannedModel"
},{
  "id": 19,
  "typeString": "class",
  "properties": [
    {
  "name": "var scannedModels",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dates",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getFilePaths()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MyProjectsView",
  "superClass": 78,
  "extensions": [
    20
  ]
},{
  "id": 21,
  "typeString": "class",
  "properties": [
    {
  "name": "var modelPreviewView: SCNView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var creationDate: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var modelName: UILabel! required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "layoutSubviews()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setSelected(_ selected: Bool, animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateCell(path: String,modelName: String,creationDate: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(style: UITableViewCell.CellStyle, reuseIdentifier: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ModelCell",
  "superClass": 68
},{
  "id": 22,
  "typeString": "protocol",
  "methods": [
    {
  "name": "onNewData(capturedData: CameraCapturedData)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "onNewPhotoData(capturedData: CameraCapturedData)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CaptureDataReceiver",
  "superClass": 79
},{
  "id": 23,
  "typeString": "enum",
  "cases": [
    {
  "name": "lidarDeviceUnavailable case requiredFormatUnavailable"
}
  ],
  "name": "ConfigurationError",
  "superClass": 80
},{
  "id": 24,
  "typeString": "class",
  "properties": [
    {
  "name": "let preferredWidthResolution",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let videoQueue",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var captureSession: AVCaptureSession!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var photoOutput: AVCapturePhotoOutput!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var depthDataOutput: AVCaptureDepthDataOutput!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var videoDataOutput: AVCaptureVideoDataOutput!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var outputVideoSync: AVCaptureDataOutputSynchronizer!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var textureCache: CVMetalTextureCache!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var delegate: CaptureDataReceiver?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFilteringEnabled",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setupSession() throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupCaptureInput() throws",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupCaptureOutputs()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startStream()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopStream()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    82
  ],
  "name": "CameraController",
  "superClass": 81,
  "containedEntities": [
    23
  ],
  "extensions": [
    25,
    26
  ]
},{
  "id": 28,
  "typeString": "class",
  "properties": [
    {
  "name": "var capturedData: CameraCapturedData @Published",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFilteringDepth: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var orientation",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var waitingForCapture",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var processingCapturedResult",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dataAvailable",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let controller: CameraController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var cancellables",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var session: AVCaptureSession",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "startPhotoCapture()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "resumeStream()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "onNewPhotoData(capturedData: CameraCapturedData)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "onNewData(capturedData: CameraCapturedData)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    82
  ],
  "name": "CameraManager"
},{
  "id": 29,
  "typeString": "class",
  "properties": [
    {
  "name": "var depth: MTLTexture?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var colorY: MTLTexture?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var colorCbCr: MTLTexture?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var cameraIntrinsics: matrix_float3x3",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var cameraReferenceDimensions: CGSize",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(depth: MTLTexture? = nil, colorY: MTLTexture? = nil, colorCbCr: MTLTexture? = nil, cameraIntrinsics: matrix_float3x3 = matrix_float3x3(), cameraReferenceDimensions: CGSize = .zero)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CameraCapturedData"
},{
  "id": 30,
  "typeString": "struct",
  "properties": [
    {
  "name": "var manager: CameraManager @State",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var opacity",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var maxDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minDepth: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DepthOverlay",
  "superClass": 73
},{
  "id": 31,
  "typeString": "struct",
  "properties": [
    {
  "name": "var rotationAngle: Double",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var capturedData: CameraCapturedData",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeCoordinator() -> MTKColorTextureCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MetalTextureViewColor",
  "superClass": 75
},{
  "id": 32,
  "typeString": "class",
  "methods": [
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKColorTextureCoordinator",
  "superClass": 83
},{
  "id": 33,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared: MetalEnvironment",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let metalDevice: MTLDevice",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let metalCommandQueue: MTLCommandQueue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let metalLibrary: MTLLibrary",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "MetalEnvironment"
},{
  "id": 34,
  "typeString": "class",
  "methods": [
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKTextureCoordinator",
  "superClass": 84
},{
  "id": 35,
  "typeString": "struct",
  "properties": [
    {
  "name": "var rotationAngle: Double @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var maxDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var metalTexture: MTLTexture?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeCoordinator() -> MTKTextureCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    38
  ],
  "name": "MetalTextureView"
},{
  "id": 36,
  "typeString": "struct",
  "properties": [
    {
  "name": "var rotationAngle: Double @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var maxDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minDepth: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var capturedData: CameraCapturedData",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeCoordinator() -> MTKColorThresholdDepthTextureCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MetalTextureColorThresholdDepthView",
  "superClass": 75
},{
  "id": 37,
  "typeString": "class",
  "methods": [
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKColorThresholdDepthTextureCoordinator",
  "superClass": 85
},{
  "id": 38,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var rotationAngle: Double",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MetalRepresentable",
  "superClass": 75,
  "extensions": [
    40
  ]
},{
  "id": 39,
  "typeString": "class",
  "properties": [
    {
  "name": "var mtkView: MTKView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pipelineState: MTLRenderPipelineState!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var metalCommandQueue: MTLCommandQueue",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var depthState: MTLDepthStencilState!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parent: MTKViewRepresentable",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setupView(mtkView: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createPlaneMetalVertexDescriptor() -> MTLVertexDescriptor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(parent: MTKViewRepresentable)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKCoordinator",
  "superClass": 81
},{
  "id": 41,
  "typeString": "struct",
  "properties": [
    {
  "name": "var rotationAngle: Double @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var maxDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scaleMovement: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var capturedData: CameraCapturedData",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeCoordinator() -> MTKPointCloudCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MetalPointCloudView",
  "superClass": 75
},{
  "id": 42,
  "typeString": "enum",
  "cases": [
    {
  "name": "quarterArc case sidewaysMovement"
}
  ],
  "name": "CameraModes"
},{
  "id": 43,
  "typeString": "class",
  "properties": [
    {
  "name": "var staticAngle: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var staticInc: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentCameraMode: CameraModes",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createMetalVertexDescriptor() -> MTLVertexDescriptor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "calcCurrentPMVMatrix(viewSize: CGSize) -> matrix_float4x4",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKPointCloudCoordinator",
  "superClass": 86,
  "containedEntities": [
    42
  ]
},{
  "id": 44,
  "typeString": "struct",
  "properties": [
    {
  "name": "var rotationAngle: Double @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var maxDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minDepth: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var capturedData: CameraCapturedData",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeCoordinator() -> MTKDepthTextureCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MetalTextureDepthView",
  "superClass": 75
},{
  "id": 45,
  "typeString": "class",
  "methods": [
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKDepthTextureCoordinator",
  "superClass": 87
},{
  "id": 46,
  "typeString": "struct",
  "properties": [
    {
  "name": "var rotationAngle: Double @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var maxDepth: Float @Binding",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minDepth: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var capturedData: CameraCapturedData",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "makeCoordinator() -> MTKColorZapCoordinator",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MetalTextureColorZapView",
  "superClass": 75
},{
  "id": 47,
  "typeString": "class",
  "properties": [
    {
  "name": "var iTime: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let speedFactor: Float",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "preparePipelineAndDepthState()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "draw(in view: MTKView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MTKColorZapCoordinator",
  "superClass": 88
},{
  "id": 48,
  "typeString": "struct",
  "properties": [
    {
  "name": "let content: T @State",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isPresented",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(@ViewBuilder content: () -> T)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ZoomOnTap",
  "superClass": 73
},{
  "id": 50,
  "typeString": "struct",
  "properties": [
    {
  "name": "var manager",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var maxDepth",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var minDepth",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var scaleMovement",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let maxRangeDepth",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let minRangeDepth",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LidarDepthView",
  "superClass": 73
},{
  "id": 51,
  "typeString": "struct",
  "properties": [
    {
  "name": "var val: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var label: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minVal: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var maxVal: Float",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stepsCount",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SliderDepthBoundaryView",
  "superClass": 73
},{
  "id": 52,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CLidarDepthView_Previews",
  "superClass": 76
},{
  "id": 53,
  "typeString": "class",
  "properties": [
    {
  "name": "let surfaces: [CapturedRoom.Surface]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let objects: [CapturedRoom.Object] required",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var previousCameraScale",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var previousCameraPosition",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "didMove(to view: SKView)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "drawSurfaces()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "drawObjects()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "addCamera()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "panGestureAction(_ sender: UIPanGestureRecognizer)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "pinchGestureAction(_ sender: UIPinchGestureRecognizer)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(capturedRoom: CapturedRoom)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FloorPlanScene",
  "superClass": 89
},{
  "id": 56,
  "typeString": "class",
  "properties": [
    {
  "name": "let capturedObject: CapturedRoom.Object required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "drawObject()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(capturedObject: CapturedRoom.Object)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FloorPlanObject",
  "superClass": 90
},{
  "id": 57,
  "typeString": "class",
  "properties": [
    {
  "name": "let capturedSurface: CapturedRoom.Surface",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var halfLength: CGFloat",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var pointA: CGPoint",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var pointB: CGPoint",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var pointC: CGPoint",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "drawDoor()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "drawOpening()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "drawWall()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "drawWindow()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "createPath(from pointA: CGPoint, to pointB: CGPoint) -> CGMutablePath",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "createShapeNode(from path: CGPath) -> SKShapeNode",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(capturedSurface: CapturedRoom.Surface)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FloorPlanSurface",
  "superClass": 90
},{
  "id": 58,
  "typeString": "struct",
  "properties": [
    {
  "name": "let model",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isScanning",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isShowingFloorPlan",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "startSession()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "stopSession()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "exportFun()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "RoomCaptureScanView",
  "superClass": 73
},{
  "id": 59,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "RoomCaptureScanView_Previews",
  "superClass": 76
},{
  "id": 60,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let roomCaptureView: RoomCaptureView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let captureSessionConfig: RoomCaptureSession.Configuration",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let roomBuilder: RoomBuilder",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var finalRoom: CapturedRoom? required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(with coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "startSession()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopSession()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession( _ session: RoomCaptureSession, didEndWith data: CapturedRoomData, error: Error? )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "RoomCaptureModel",
  "superClass": 91
},{
  "id": 61,
  "typeString": "struct",
  "methods": [
    {
  "name": "makeUIView(context: Context) -> RoomCaptureView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateUIView(_ uiView: RoomCaptureView, context: Context)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RoomCaptureRepresentable",
  "superClass": 75
},{
  "id": 62,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WelcomeView",
  "superClass": 73
},{
  "id": 63,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "WelcomeView_Previews",
  "superClass": 76
},{
  "id": 64,
  "typeString": "struct",
  "properties": [
    {
  "name": "var colorScheme",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "NavigationOptionView",
  "superClass": 73
},{
  "id": 65,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "NavigationOptionView_Previews",
  "superClass": 76
},{
  "id": 66,
  "typeString": "struct",
  "properties": [
    {
  "name": "var selected",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ContentView",
  "superClass": 73
},{
  "id": 67,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ContentView_Previews",
  "superClass": 76
},{
  "id": 68,
  "typeString": "class",
  "name": "UITableViewCell"
},{
  "id": 69,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 70,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 71,
  "typeString": "class",
  "name": "UIViewController"
},{
  "id": 72,
  "typeString": "class",
  "name": "App"
},{
  "id": 73,
  "typeString": "class",
  "name": "View",
  "extensions": [
    49
  ]
},{
  "id": 74,
  "typeString": "class",
  "name": "ButtonStyle"
},{
  "id": 75,
  "typeString": "class",
  "name": "UIViewRepresentable"
},{
  "id": 76,
  "typeString": "class",
  "name": "PreviewProvider"
},{
  "id": 77,
  "typeString": "class",
  "name": "UIViewControllerRepresentable"
},{
  "id": 78,
  "typeString": "class",
  "name": "UITableViewController"
},{
  "id": 79,
  "typeString": "class",
  "name": "AnyObject"
},{
  "id": 80,
  "typeString": "class",
  "name": "Error"
},{
  "id": 81,
  "typeString": "class",
  "name": "NSObject"
},{
  "id": 82,
  "typeString": "protocol",
  "name": "ObservableObject"
},{
  "id": 83,
  "typeString": "class",
  "name": "MTKCoordinator<MetalTextureViewColor>"
},{
  "id": 84,
  "typeString": "class",
  "name": "MTKCoordinator<MetalTextureView>"
},{
  "id": 85,
  "typeString": "class",
  "name": "MTKCoordinator<MetalTextureColorThresholdDepthView>"
},{
  "id": 86,
  "typeString": "class",
  "name": "MTKCoordinator<MetalPointCloudView>"
},{
  "id": 87,
  "typeString": "class",
  "name": "MTKCoordinator<MetalTextureDepthView>"
},{
  "id": 88,
  "typeString": "class",
  "name": "MTKCoordinator<MetalTextureColorZapView>"
},{
  "id": 89,
  "typeString": "class",
  "name": "SKScene"
},{
  "id": 90,
  "typeString": "class",
  "name": "SKNode"
},{
  "id": 91,
  "typeString": "class",
  "name": "RoomCaptureSessionDelegate"
},{
  "id": 92,
  "typeString": "protocol",
  "name": "UITableViewDelegate"
},{
  "id": 93,
  "typeString": "protocol",
  "name": "UITableViewDataSource"
},{
  "id": 94,
  "typeString": "protocol",
  "name": "RoomCaptureViewDelegate"
},{
  "id": 95,
  "typeString": "protocol",
  "name": "AVCaptureDataOutputSynchronizerDelegate"
},{
  "id": 96,
  "typeString": "protocol",
  "name": "AVCapturePhotoCaptureDelegate"
},{
  "id": 97,
  "typeString": "class",
  "name": "CVPixelBuffer",
  "extensions": [
    27
  ]
},{
  "id": 98,
  "typeString": "class",
  "name": "simd_float4x4",
  "extensions": [
    54
  ]
},{
  "id": 99,
  "typeString": "class",
  "name": "CGPoint",
  "extensions": [
    55
  ]
},{
  "id": 5,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    92,
    93
  ],
  "extendedEntityName": "ViewController"
},{
  "id": 6,
  "typeString": "extension",
  "methods": [
    {
  "name": "getFileCreationDate(path: URL) -> String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "ViewController"
},{
  "id": 8,
  "typeString": "extension",
  "methods": [
    {
  "name": "captureSession(_ session: RoomCaptureSession, didUpdate room: CapturedRoom)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession(_ session: RoomCaptureSession, didAdd room: CapturedRoom)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession(_ session: RoomCaptureSession, didChange room: CapturedRoom)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession(_ session: RoomCaptureSession, didRemove room: CapturedRoom)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession(_ session: RoomCaptureSession, didProvide instruction: RoomCaptureSession.Instruction)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession(_ session: RoomCaptureSession, didStartWith configuration: RoomCaptureSession.Configuration)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureSession(_ session: RoomCaptureSession, didEndWith data: CapturedRoomData, error: (Error)?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    91
  ],
  "extendedEntityName": "RoomScannerVC"
},{
  "id": 9,
  "typeString": "extension",
  "methods": [
    {
  "name": "captureView(shouldPresent roomDataForProcessing: CapturedRoomData, error: (Error)?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "captureView(didPresent processedResult: CapturedRoom, error: (Error)?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    94
  ],
  "extendedEntityName": "RoomScannerVC"
},{
  "id": 20,
  "typeString": "extension",
  "methods": [
    {
  "name": "getFileCreationDate(path: URL) -> String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MyProjectsView"
},{
  "id": 25,
  "typeString": "extension",
  "methods": [
    {
  "name": "dataOutputSynchronizer(_ synchronizer: AVCaptureDataOutputSynchronizer, didOutput synchronizedDataCollection: AVCaptureSynchronizedDataCollection)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    95
  ],
  "extendedEntityName": "CameraController"
},{
  "id": 26,
  "typeString": "extension",
  "methods": [
    {
  "name": "capturePhoto()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingPhoto photo: AVCapturePhoto, error: Error?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    96
  ],
  "extendedEntityName": "CameraController"
},{
  "id": 27,
  "typeString": "extension",
  "methods": [
    {
  "name": "texture(withFormat pixelFormat: MTLPixelFormat, planeIndex: Int, addToCache cache: CVMetalTextureCache) -> MTLTexture?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "CVPixelBuffer"
},{
  "id": 40,
  "typeString": "extension",
  "methods": [
    {
  "name": "makeUIView(context: UIViewRepresentableContext<Self>) -> MTKView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateUIView(_ view: MTKView, context: UIViewRepresentableContext<Self>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MetalRepresentable"
},{
  "id": 49,
  "typeString": "extension",
  "properties": [
    {
  "name": "var rotationAngle: Double",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var angle",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewOrientation: UIImage.Orientation",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var result",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let currentWindowScene",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let interfaceOrientation",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "calcAspect(orientation: UIImage.Orientation, texture: MTLTexture?) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "View"
},{
  "id": 54,
  "typeString": "extension",
  "properties": [
    {
  "name": "var eulerAngles: simd_float3",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var position: simd_float3",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "simd_float4x4"
},{
  "id": 55,
  "typeString": "extension",
  "methods": [
    {
  "name": "rotateAround(point: CGPoint, by angle: CGFloat) -> CGPoint",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "CGPoint"
}] 