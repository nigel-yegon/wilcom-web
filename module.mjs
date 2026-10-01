// @ts-check
import { module } from "@prisma/composer";
import wilcomWebService from "./service.mjs";

export default module("wilcom-web", ({ provision }) => {
  provision(wilcomWebService, { id: "wilcomweb" });
});
