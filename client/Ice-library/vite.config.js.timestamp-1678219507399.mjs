// vite.config.js
import { defineConfig } from "file:///D:/documents/codes/react/REACT%20PROJECTS/Library/client/Ice-library/node_modules/vite/dist/node/index.js";
import react from "file:///D:/documents/codes/react/REACT%20PROJECTS/Library/client/Ice-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/auth/signup": "http://localhost:5000/",
      "/api/auth/signin": "http://localhost:5000/",
      "/api/auth/details": "http://localhost:5000/",
      "/account/add/addl": "http://localhost:5000/",
      "/account/add/gets": "http://localhost:5000/",
      "/account/add/delete": "http://localhost:5000/"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkb2N1bWVudHNcXFxcY29kZXNcXFxccmVhY3RcXFxcUkVBQ1QgUFJPSkVDVFNcXFxcTGlicmFyeVxcXFxjbGllbnRcXFxcSWNlLWxpYnJhcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRvY3VtZW50c1xcXFxjb2Rlc1xcXFxyZWFjdFxcXFxSRUFDVCBQUk9KRUNUU1xcXFxMaWJyYXJ5XFxcXGNsaWVudFxcXFxJY2UtbGlicmFyeVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZG9jdW1lbnRzL2NvZGVzL3JlYWN0L1JFQUNUJTIwUFJPSkVDVFMvTGlicmFyeS9jbGllbnQvSWNlLWxpYnJhcnkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6e1xuICAgIHByb3h5OntcbiAgICAgIFwiL2FwaS9hdXRoL3NpZ251cFwiOlwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiLFxuICAgICAgXCIvYXBpL2F1dGgvc2lnbmluXCI6XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIsXG4gICAgICBcIi9hcGkvYXV0aC9kZXRhaWxzXCI6XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIsXG4gICAgICBcIi9hY2NvdW50L2FkZC9hZGRsXCI6XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIsXG4gICAgICBcIi9hY2NvdW50L2FkZC9nZXRzXCI6XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIsXG4gICAgICBcIi9hY2NvdW50L2FkZC9kZWxldGVcIjpcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIixcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxvQkFBb0I7QUFDdmEsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFPO0FBQUEsSUFDTCxPQUFNO0FBQUEsTUFDSixvQkFBbUI7QUFBQSxNQUNuQixvQkFBbUI7QUFBQSxNQUNuQixxQkFBb0I7QUFBQSxNQUNwQixxQkFBb0I7QUFBQSxNQUNwQixxQkFBb0I7QUFBQSxNQUNwQix1QkFBc0I7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
