import { JSDOM } from 'jsdom';

const dom = new JSDOM(`
    <html>
        <body>
            <input type="text" id="txtInputA">
            <input type="text" id="txtInputB">
            <button id="btnCalculate">Hitung Pangkat</button>
            <input type="text" id="lblResult" readonly>
        </body>
    </html>
`);

global.document = dom.window.document;
global.window = dom.window;