--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-10-30 11:59:48

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

--
-- TOC entry 3337 (class 0 OID 16473)
-- Dependencies: 219
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.category (id, name) VALUES (2, 'phones');
INSERT INTO public.category (id, name) VALUES (3, 'Cars');
INSERT INTO public.category (id, name) VALUES (4, 'Electronics');


--
-- TOC entry 3335 (class 0 OID 16464)
-- Dependencies: 217
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product (id, name, price, quantity, value, threshold, "categoryId") VALUES (1, 'dsdsd', '12', '212', '212', 245, 2);
INSERT INTO public.product (id, name, price, quantity, value, threshold, "categoryId") VALUES (2, 'QMobile', '3', '3', '2', 1, 2);


--
-- TOC entry 3333 (class 0 OID 16446)
-- Dependencies: 215
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (id, name, password, email) VALUES (1, 'Hassan', '45456456', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (2, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (3, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (4, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (5, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (6, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (7, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (8, '', '', '');
INSERT INTO public."user" (id, name, password, email) VALUES (9, 'hassan', '212312312312', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (10, 'hassan', '212312312312', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (11, 'hassan', '212312312312', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (12, 'hassan', '1212312312313', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (13, 'hassan', '1212312312313', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (14, 'hassan', '1212312312313', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (15, 'hassan', '1212312312313', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (16, 'hassan', '1212312312313', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (17, 'hassan', '564564564654', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (18, 'hassan', '564564564654', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (19, 'hassan', 'dsdsdsdsd', 'hassan@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (20, 'Ali', 'hitman@12345', 'ali@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (21, 'Ali', 'hitman@12345', 'ali@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (22, 'Tania', '12345', 'tania@gmail.com');
INSERT INTO public."user" (id, name, password, email) VALUES (23, 'Mariam', '12345678', 'mariam@gmail.com');


--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 218
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 4, true);


--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 216
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 2, true);


--
-- TOC entry 3345 (class 0 OID 0)
-- Dependencies: 214
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 23, true);


-- Completed on 2023-10-30 11:59:49

--
-- PostgreSQL database dump complete
--

