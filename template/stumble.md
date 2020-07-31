heroイメージの背景にしようとしたが、できない。
- ブラウザの拡大縮小に対応できない。
→解決：background-imageの指定をbodyに追加＋ background-attachment: fixed;
　height指定は必要、padding-topは0

nav-bar(header)を上部固定にしたいができない。
- 背景画像のpadding-topによってうまく表示されない
→z-indexの指定で解決