package mx.uv;

import static spark.Spark.*;
import  com.google.gson.*;
import java.util.Scanner;

public class App {
    private static String nombre = "";
    private static String apellidoP = "";
    private static String apellidoM = "";

    public static void main(String[] args) {
        System.out.println("Hello World!");

        // Configuración de CORS
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
                response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
                response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
                }
            return "OK";
        });
        // Configuración de CORS para todas las rutas
        before((request,response)->response.header("Access-Control-Allow-Origin","*"));

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


        delete("/borrar", (request, response) -> {
            nombre = "";
            apellidoP = "";
            apellidoM = "";
            return "Los datos han sido eliminados";
        });


        get("/editar", (request, response) -> {
            nombre = request.queryParams("nombre");
            apellidoP = request.queryParams("apellidoP");
            apellidoM = request.queryParams("apellidoM");
            return "Datos editados";
        });

        
    }
}
