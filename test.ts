import * as pdfjsLib from './pdf.js';

const file_path = './19760428.pdf';
const page = 1;
(async () => {
    const doc = await pdfjsLib.getDocument({
        url: file_path,
        cMapPacked: true,
        cMapUrl: './node_modules/pdfjs-dist/cmaps/',
      }).promise;
    let content_obj = await (await doc.getPage(page!)).getTextContent();
    const viewport = (await doc.getPage(page!)).getViewport({ scale: 1 });
    console.log(viewport)
    debugger;
})();