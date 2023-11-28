package mx.uv;

import static spark.Spark.*;

public class App {
    private static String nombre = "";
    private static String apellidoP = "";
    private static String apellidoM = "";

    public static void main(String[] args) {
        System.out.println("Hello World!");

        // Configuración de CORS
        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        // Configuración de CORS para todas las rutas
        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Request-Method", "*");
            response.header("Access-Control-Allow-Headers", "*");
            // Aquí puedes agregar otros encabezados y configuraciones si es necesario
        });

        // Rutas para diferentes operaciones
        get("/", (request, response) -> {
            return "<h1>Hola mundo</h1>";
        });

        get("/insertar", (request, response) -> {
            nombre = request.queryParams("nombre");
            apellidoP = request.queryParams("apellidoP");
            apellidoM = request.queryParams("apellidoM");
            return "Datos insertados";
        });

        get("/consultar", (request, response) -> {
            return "Nombre: " + nombre + ", Apellido Paterno: " + apellidoP + ", Apellido Materno: " + apellidoM;
        });

        get("/editar", (request, response) -> {
            nombre = request.queryParams("nombre");
            apellidoP = request.queryParams("apellidoP");
            apellidoM = request.queryParams("apellidoM");
            return "Datos editados";
        });

        get("/eliminar", (request, response) -> {
            nombre = "";
            apellidoP = "";
            apellidoM = "";
            return "Los datos han sido eliminados";
        });
    }
}
