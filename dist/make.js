const fs = require('fs');
const app = require('../app/package.json');

let c = `
[Setup]
AppId={{F746CC81-7A45-4F41-9C73-B093B58BCB3A}
AppName="OPSE Overlays"
AppVersion="${app.version}"
AppPublisher="OPSE Dev"
AppPublisherURL="https://github.com/opse-dev/OPSE-overlays"
AppSupportURL="https://github.com/opse-dev/OPSE-overlays"
AppUpdatesURL="https://github.com/opse-dev/OPSE-overlays"
DefaultDirName="{autopf}\\OPSE Overlays"
DisableProgramGroupPage=yes
OutputDir="${__dirname}"
OutputBaseFilename="${app.name}-setup"
SetupIconFile="${__dirname}\\icon.ico"
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "${__dirname}\\${app.name}-win32-x64\\${app.name}.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\chrome_100_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\chrome_200_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\d3dcompiler_47.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\ffmpeg.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\icudtl.dat"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\libEGL.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\libGLESv2.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\LICENSE"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\resources.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\snapshot_blob.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\v8_context_snapshot.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\version"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\vk_swiftshader.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\vk_swiftshader_icd.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\vulkan-1.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "${__dirname}\\${app.name}-win32-x64\\data\\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{autoprograms}\\OPSE Overlays"; Filename: "{app}\\${app.name}.exe"
Name: "{autodesktop}\\OPSE Overlays"; Filename: "{app}\\${app.name}.exe"; Tasks: desktopicon

[Run]
Filename: "{app}\\${app.name}.exe"; Description: "{cm:LaunchProgram,{#StringChange('${app.name}', '&', '&&')}}"; Flags: nowait postinstall skipifsilent
`

fs.writeFile('./compiler.iss', c, 'utf8', (err) => {
    if (err) console.log(err);
    else console.log("Done");
})