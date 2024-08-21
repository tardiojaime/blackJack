import {defineConfig} from 'vite'

export default defineConfig ({
  server: {
    host: '0.0.0.0', // escucha todas las interfaces
    port: 5173
  }
})
/* base: './',
root: path.resolve(__dirname, "src"),
build: {
  outDir: "../docs",
  assetsDir: "assets", // Ruta relativa a outDir
  rollupOptions: {
    input:{
      main: 'src/index.html',
      invitacion: 'src/invitacion.html'
    }
  }
}, */