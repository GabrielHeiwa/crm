--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4 (Debian 16.4-1.pgdg120+1)
-- Dumped by pg_dump version 16.4 (Debian 16.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.addresses (
    id integer NOT NULL,
    street character varying NOT NULL,
    neightborhood character varying NOT NULL,
    country character varying NOT NULL,
    city character varying NOT NULL,
    zip_code character varying NOT NULL,
    state character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_user integer
);


ALTER TABLE public.addresses OWNER TO postgres;

--
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.addresses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.addresses_id_seq OWNER TO postgres;

--
-- Name: addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    email character varying NOT NULL,
    cpf character varying,
    cnpj character varying,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    udpated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_user integer
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clients_id_seq OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: digital_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.digital_products (
    id integer NOT NULL,
    url_to_download character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_product integer
);


ALTER TABLE public.digital_products OWNER TO postgres;

--
-- Name: digital_products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.digital_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.digital_products_id_seq OWNER TO postgres;

--
-- Name: digital_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.digital_products_id_seq OWNED BY public.digital_products.id;


--
-- Name: negotiations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.negotiations (
    id integer NOT NULL,
    status character varying NOT NULL,
    discount integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_product_list integer,
    fk_client integer
);


ALTER TABLE public.negotiations OWNER TO postgres;

--
-- Name: negotiations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.negotiations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.negotiations_id_seq OWNER TO postgres;

--
-- Name: negotiations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.negotiations_id_seq OWNED BY public.negotiations.id;


--
-- Name: physical_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.physical_products (
    id integer NOT NULL,
    cost_value integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_product integer
);


ALTER TABLE public.physical_products OWNER TO postgres;

--
-- Name: physical_products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.physical_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.physical_products_id_seq OWNER TO postgres;

--
-- Name: physical_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.physical_products_id_seq OWNED BY public.physical_products.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    sell_value integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_supplier integer
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: products_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_list (
    id integer NOT NULL,
    sequence integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_product integer
);


ALTER TABLE public.products_list OWNER TO postgres;

--
-- Name: products_list_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_list_id_seq OWNER TO postgres;

--
-- Name: products_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_list_id_seq OWNED BY public.products_list.id;


--
-- Name: suppliers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.suppliers (
    id integer NOT NULL,
    cnpj character varying NOT NULL,
    email character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone,
    fk_user integer
);


ALTER TABLE public.suppliers OWNER TO postgres;

--
-- Name: suppliers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.suppliers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.suppliers_id_seq OWNER TO postgres;

--
-- Name: suppliers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.suppliers_id_seq OWNED BY public.suppliers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying NOT NULL,
    cpf character varying,
    cnpj character varying,
    password character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: addresses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: digital_products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products ALTER COLUMN id SET DEFAULT nextval('public.digital_products_id_seq'::regclass);


--
-- Name: negotiations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negotiations ALTER COLUMN id SET DEFAULT nextval('public.negotiations_id_seq'::regclass);


--
-- Name: physical_products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.physical_products ALTER COLUMN id SET DEFAULT nextval('public.physical_products_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: products_list id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_list ALTER COLUMN id SET DEFAULT nextval('public.products_list_id_seq'::regclass);


--
-- Name: suppliers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers ALTER COLUMN id SET DEFAULT nextval('public.suppliers_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: digital_products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: negotiations; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: physical_products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: products_list; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: suppliers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.addresses_id_seq', 1, false);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, false);


--
-- Name: digital_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.digital_products_id_seq', 1, false);


--
-- Name: negotiations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.negotiations_id_seq', 1, false);


--
-- Name: physical_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.physical_products_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: products_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_list_id_seq', 1, false);


--
-- Name: suppliers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.suppliers_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: products PK_0806c755e0aca124e67c0cf6d7d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY (id);


--
-- Name: addresses PK_745d8f43d3af10ab8247465e450; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: digital_products PK_a85e430cfd78123785d9c787037; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products
    ADD CONSTRAINT "PK_a85e430cfd78123785d9c787037" PRIMARY KEY (id);


--
-- Name: suppliers PK_b70ac51766a9e3144f778cfe81e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY (id);


--
-- Name: negotiations PK_e6162623f2af0c4b2da55563413; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negotiations
    ADD CONSTRAINT "PK_e6162623f2af0c4b2da55563413" PRIMARY KEY (id);


--
-- Name: clients PK_f1ab7cf3a5714dbc6bb4e1c28a4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY (id);


--
-- Name: products_list PK_f1c579aeb72ae80d6930429a7c9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_list
    ADD CONSTRAINT "PK_f1c579aeb72ae80d6930429a7c9" PRIMARY KEY (id);


--
-- Name: physical_products PK_f40e12c838ad5a182d263fe0d1d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.physical_products
    ADD CONSTRAINT "PK_f40e12c838ad5a182d263fe0d1d" PRIMARY KEY (id);


--
-- Name: products REL_4f39215c4dcc965033cfb92255; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "REL_4f39215c4dcc965033cfb92255" UNIQUE (fk_supplier);


--
-- Name: suppliers REL_56ad480a6a6678828932d56c37; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "REL_56ad480a6a6678828932d56c37" UNIQUE (fk_user);


--
-- Name: physical_products REL_600ca4b74d1f897d7f49d2421e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.physical_products
    ADD CONSTRAINT "REL_600ca4b74d1f897d7f49d2421e" UNIQUE (fk_product);


--
-- Name: products_list REL_b0b125a4968206e892dd676983; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_list
    ADD CONSTRAINT "REL_b0b125a4968206e892dd676983" UNIQUE (fk_product);


--
-- Name: clients REL_bc9a163dfdf75596e16708a4d4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "REL_bc9a163dfdf75596e16708a4d4" UNIQUE (fk_user);


--
-- Name: digital_products REL_c93d4db42915c42addbfab3dec; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products
    ADD CONSTRAINT "REL_c93d4db42915c42addbfab3dec" UNIQUE (fk_product);


--
-- Name: users UQ_230b925048540454c8b4c481e1c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE (cpf);


--
-- Name: clients UQ_4245ac34add1ceeb505efc98777; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "UQ_4245ac34add1ceeb505efc98777" UNIQUE (cpf);


--
-- Name: negotiations UQ_607d9b431a329996cb7e47ee456; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negotiations
    ADD CONSTRAINT "UQ_607d9b431a329996cb7e47ee456" UNIQUE (fk_client);


--
-- Name: suppliers UQ_66181e465a65c2ddcfa9c00c9c7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "UQ_66181e465a65c2ddcfa9c00c9c7" UNIQUE (email);


--
-- Name: negotiations UQ_7eee5be39d9ba2918f75326c01e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negotiations
    ADD CONSTRAINT "UQ_7eee5be39d9ba2918f75326c01e" UNIQUE (fk_product_list);


--
-- Name: users UQ_a7815967475d0accd76feba8a1e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_a7815967475d0accd76feba8a1e" UNIQUE (cnpj);


--
-- Name: clients UQ_b48860677afe62cd96e12659482; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE (email);


--
-- Name: clients UQ_c2528f5ea78df3e939950b861c0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "UQ_c2528f5ea78df3e939950b861c0" UNIQUE (cnpj);


--
-- Name: suppliers UQ_fce20fe3509933fa1931ae7cdad; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "UQ_fce20fe3509933fa1931ae7cdad" UNIQUE (cnpj);


--
-- Name: products FK_4f39215c4dcc965033cfb922556; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "FK_4f39215c4dcc965033cfb922556" FOREIGN KEY (fk_supplier) REFERENCES public.suppliers(id);


--
-- Name: suppliers FK_56ad480a6a6678828932d56c370; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "FK_56ad480a6a6678828932d56c370" FOREIGN KEY (fk_user) REFERENCES public.users(id);


--
-- Name: physical_products FK_600ca4b74d1f897d7f49d2421e2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.physical_products
    ADD CONSTRAINT "FK_600ca4b74d1f897d7f49d2421e2" FOREIGN KEY (fk_product) REFERENCES public.products(id);


--
-- Name: negotiations FK_607d9b431a329996cb7e47ee456; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negotiations
    ADD CONSTRAINT "FK_607d9b431a329996cb7e47ee456" FOREIGN KEY (fk_client) REFERENCES public.clients(id);


--
-- Name: negotiations FK_7eee5be39d9ba2918f75326c01e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negotiations
    ADD CONSTRAINT "FK_7eee5be39d9ba2918f75326c01e" FOREIGN KEY (fk_product_list) REFERENCES public.products_list(id);


--
-- Name: products_list FK_b0b125a4968206e892dd6769838; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_list
    ADD CONSTRAINT "FK_b0b125a4968206e892dd6769838" FOREIGN KEY (fk_product) REFERENCES public.products(id);


--
-- Name: clients FK_bc9a163dfdf75596e16708a4d42; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "FK_bc9a163dfdf75596e16708a4d42" FOREIGN KEY (fk_user) REFERENCES public.users(id);


--
-- Name: digital_products FK_c93d4db42915c42addbfab3deca; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products
    ADD CONSTRAINT "FK_c93d4db42915c42addbfab3deca" FOREIGN KEY (fk_product) REFERENCES public.products(id);


--
-- Name: addresses FK_d68257a0afdd3f52549d97c9132; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT "FK_d68257a0afdd3f52549d97c9132" FOREIGN KEY (fk_user) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

