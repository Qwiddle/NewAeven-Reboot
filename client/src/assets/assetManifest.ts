const AssetManifest: IAssets = {
  images: [
    'header.png'
  ]
};

interface IAssets {
  images?: string[];
  sprites?: string[];
  audio?: string[];
  bitmapFonts?: string[];
  fonts?: IFont;
};

interface IFont {
  [key: string]: {
    families: string[]
  };
};

export default AssetManifest;