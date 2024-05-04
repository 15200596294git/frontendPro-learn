import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'
export default defineConfig({
    presets: [
        presetIcons(),
        presetUno(),
        presetAttributify()
    ]
})