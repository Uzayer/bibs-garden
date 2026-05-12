---
title: yt-dlp Error 403
description: solution for yt-dlps error 403
publish: true
tags:
  - topic/tech
  - type/issues
  - status/ref
source: https://www.reddit.com/answers/be07808d-6613-467a-83fc-3274d45613ec/?q=updating+yt-dlp&source=SERP&upstreamCID=8f599549-0d25-42df-af5a-a712dbafe596&upstreamIID=330f1140-6b31-4e27-bc82-508526ba6ec2&upstreamQ=updating+yt-dlp&upstreamQID=a34cb6ed-1083-42dc-bc24-30b88c327f17
created: 2026-04-10 12:44
---



- if you get this error you need to update yt-dlp 
### How to Update yt-dlp

#### For Executable/Binary Users

- **Direct Update Command**: If you are using the standalone executable, you can update by running:
    
    yt-dlp -U
    
    in your command prompt or terminal. ["The same place where you enter `yt-dlp "URL"`, you would instead enter `yt-dlp -U`"](https://www.reddit.com/r/youtubedl/comments/1nryib2/comment/nghwknw/)
    
- **Navigate and Update**: For Windows users, go to the folder where `YT-DLP.exe` is located, type `cmd` in the address bar, and press Enter to open a command prompt in that directory. Then, run the update command. ["Go to the folder where you keep the YT-DLP.exe and type “cmd” near the top of the folder then press enter."](https://www.reddit.com/r/youtubedl/comments/1nryib2/comment/ngi7isb/)
    

#### For Pip Users

- **Standard Update**: If you installed yt-dlp using pip, use the following command to update:
    
    python3 -m pip install -U "yt-dlp"
    
    ["You installed yt-dlp with pip or the wheel from PyPi; Use that to update"](https://www.reddit.com/r/youtubedl/comments/1he8tp4/updating_ytdlp/)
    
- **Nightly Build**: To update to the nightly build, which includes the latest fixes and features, use:
    
    python3 -m pip install -U --pre "yt-dlp[default]"
    
    ["To install/upgrade to nightly with pip: `python3 -m pip install -U --pre "yt-dlp[default]"`"](https://www.reddit.com/r/youtubedl/comments/1qva6cz/ytdlp_release_20260204/)
    

#### For Homebrew Users

- **Uninstall and Reinstall**: For Homebrew users, the process involves uninstalling and then reinstalling with the `--HEAD` option to get the latest master build.
    
    brew uninstall yt-dlp
    brew update && brew install --HEAD yt-dlp
    
    ["brew uninstall yt-dlp brew update && brew install --HEAD yt-dlp"](https://www.reddit.com/r/youtubedl/comments/1he8tp4/comment/m21sf7w/)
    
- **Upgrade Master Build**: If you have already installed with `--HEAD`, you can upgrade using:
    
    brew upgrade --fetch-HEAD yt-dlp
    
    ["To upgrade to latest master with homebrew if you've already installed with --HEAD: `brew upgrade --fetch-HEAD yt-dlp`"](https://www.reddit.com/r/youtubedl/comments/1qva6cz/ytdlp_release_20260204/)
    

#### For Git Users

- **Clone and Build**: If you installed yt-dlp from Git, you need to clone the repository, navigate to the directory, and then build and install.
    
    git clone https://github.com/yt-dlp/yt-dlp.git
    cd yt-dlp
    make
    sudo make install
    
    ["After uninstalling from your package manager (assuming you have git installed): `git clone https://github.com/yt-dlp/yt-dlp.git`"](https://www.reddit.com/r/youtubedl/comments/1he8tp4/comment/m224ed8/)
    

#### Additional Tips

- **Check Python Version**: Ensure you have a compatible version of Python installed, as yt-dlp frequently updates its requirements. ["Python 3.9 is end-of-life."](https://www.reddit.com/r/youtubedl/comments/1oc9iv1/comment/nkky4dx/)
    
- **Use Cookies**: For some websites, especially YouTube, using cookies can help bypass sign-in errors. ["I find I've got to use cookies for everything now or I get the sign-in error, even on my first attempt."](https://www.reddit.com/r/youtubedl/comments/1rjundl/comment/o8h44no/)
    
- **Nightly Builds**: If you encounter persistent issues, consider updating to the nightly build for the latest fixes. ["The nightly release channel is strongly recommended for most users, as it gets all important fixes sooner."](https://www.reddit.com/r/youtubedl/comments/1qva6cz/ytdlp_release_20260204/)
    

#### Communities for Further Help

- [r/youtubedl](https://www.reddit.com/r/youtubedl/)
    
- [r/TubeArchivist](https://www.reddit.com/r/TubeArchivist/)
    
- [r/fossdroid](https://www.reddit.com/r/fossdroid/)
    

These communities are great places to ask for help and stay updated on the latest developments.