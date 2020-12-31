#define MyAppName "OPSE Overlay Server"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "OPSE Dev"
#define MyAppURL "https://github.com/opse-dev/OVERLAY-server"
#define MyAppBaseName "opse-overlay-server"
#define MyAppDir "PATH OT dist FOLDER"
#define MyAppDirSrc "{#MyAppBaseName}-win32-x64"
#define MyIcon "PATH TO icon.ico"

[Setup]
AppId={{81C958A1-1719-4DE0-9A8F-358C3BCC9981}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DisableProgramGroupPage=yes
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
OutputDir={#MyAppDir}
OutputBaseFilename={#MyAppBaseName}-setup
SetupIconFile={#MyIcon}
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "{#MyAppDir}\{#MyAppDirSrc}\{#MyAppBaseName}.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\chrome_100_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\chrome_200_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\d3dcompiler_47.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\ffmpeg.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\icudtl.dat"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\libEGL.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\libGLESv2.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\LICENSE"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\resources.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\snapshot_blob.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\v8_context_snapshot.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\version"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\vk_swiftshader.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\vk_swiftshader_icd.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\vulkan-1.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppDir}\{#MyAppDirSrc}\data\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppBaseName}.exe"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppBaseName}.exe"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppBaseName}.exe"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

