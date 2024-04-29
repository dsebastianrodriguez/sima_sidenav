export interface User {
    id?: number;
    login?: string;
    password?: string;
    nombre?: string;
    habilitado?: string;
    cambiar_password?: string;
    id_grupo?: number | null;
    idioma?: string;
    messenger?: string;
    administrable?: string;
    correo?: string;
    cedula?: string;
    fecha_creacion?: string;
    fecha_ineactivaccion?: string | null;
    fecha_ultima_modificacion?: string | null;
    fecha_ultima_ingreso?: string | null;
    analisis_ventas?: string | null;
    telefono?: string | null;
    habilitar_Requi?: string | null;
}
