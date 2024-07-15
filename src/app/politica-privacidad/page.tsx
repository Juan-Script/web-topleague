import { Flex, Text, Heading, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";

export default function page() {
  return (
    <Flex gap="20px" direction="column" bg="#202222" p="50px" alignItems="center" justify="center">
      <Flex
        mx="auto"
      >
        <Image
          src="/LogoTipo.png"
          alt="Logo"
          width={146}
          height={26}
        />
      </Flex>

      <Flex mx="200px" bg="#202222" direction="column" textColor="white">
        <Heading as="h1" size="xl">
          POLÍTICA DE PRIVACIDAD PARA APLICACIONES MÓVILES (APPS)
        </Heading>
        <Text mb={4}>Fecha de última actualización: 11/07/2024</Text>

        <Text mb={4}>
          Conforme al Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (Reglamento General de Protección de Datos – RGPD), EMPRESA informa a los usuarios de la aplicación _______________________ (en adelante, la Aplicación), acerca del tratamiento de datos personales que ellos voluntariamente hayan facilitado durante el proceso de registro, acceso y utilización del servicio.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO
        </Heading>
        <Text mb={4}>
          EMPRESA, con CIF/NIF n.º: ________________ y domicilio a efectos de notificaciones en: ________________________________________, inscrita en el Registro Mercantil de_________________ Tomo _________, Folio ___________, Sección ª, Hoja _______, inscripción ª (en adelante, el Responsable del Tratamiento), es la entidad responsable del tratamiento de los datos facilitados por los clientes de la Aplicación (en adelante, el/los Usuario/s).
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          2. FINALIDAD DEL TRATAMIENTO DE DATOS
        </Heading>
        <Text mb={4}>
          Para proceder al registro, acceso y posterior uso de la Aplicación, el Usuario deberá facilitar -de forma voluntaria-, datos de carácter personal (esencialmente, identificativos y de contacto), los cuales serán incorporados a soportes automatizados titularidad de EMPRESA.
        </Text>
        <Text mb={4}>
          La recogida, almacenamiento, modificación, estructuración y en su caso, eliminación de los datos proporcionados por los Usuarios constituirán operaciones de tratamiento llevadas a cabo por el Responsable, con la finalidad de garantizar el correcto funcionamiento de la Aplicación, mantener la relación de prestación de servicios y/o comercial con el Usuario, y para la gestión, administración, información, prestación y mejora del servicio.
        </Text>
        <Text mb={4}>
          Los datos personales facilitados por el Usuario, especialmente el correo electrónico, podrán emplearse también para remitir boletines (newsletters) y comunicaciones comerciales de promociones y/o publicidad de la Aplicación, siempre y cuando el Usuario haya prestado previamente su consentimiento expreso para la recepción de estas comunicaciones vía electrónica.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          3. LEGITIMACIÓN
        </Heading>
        <Text mb={4}>
          El tratamiento de los datos del Usuario se realiza con las siguientes bases jurídicas que legitiman el mismo:
        </Text>
        <List spacing={3} mb={4}>
          <ListItem>
            • La solicitud de información y/o la contratación de los servicios de la Aplicación, cuyos términos y condiciones se pondrán a disposición del Usuario en todo caso, con carácter previo, para su expresa aceptación.
          </ListItem>
          <ListItem>
            • El consentimiento libre, específico, informado e inequívoco del Usuario, poniendo a su disposición la presente política de privacidad, que deberá aceptar mediante una declaración o una clara acción afirmativa, como el marcado de una casilla dispuesta al efecto.
          </ListItem>
        </List>
        <Text mb={4}>
          En caso de que el Usuario no facilite a EMPRESA sus datos, o lo haga de forma errónea o incompleta, no será posible proceder al uso de la Aplicación.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          4. CONSERVACIÓN DE LOS DATOS PERSONALES
        </Heading>
        <Text mb={4}>
          Los datos personales proporcionados por el Usuario se conservarán en los sistemas y bases de datos del Responsable del Tratamiento, mientras aquel continúe haciendo uso de la Aplicación, y siempre que no solicite su supresión.
        </Text>
        <Text mb={4}>
          Con el objetivo de depurar las posibles responsabilidades derivadas del tratamiento, los datos se conservarán por un período mínimo de cinco años.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          5. DESTINATARIOS
        </Heading>
        <Text mb={4}>
          Los datos no se comunicarán a ningún tercero ajeno a EMPRESA, salvo obligación legal o en cualquier caso, previa solicitud del consentimiento del Usuario.
        </Text>
        <Text mb={4}>
          De otra parte, EMPRESA podrá dar acceso o transmitir los datos personales facilitados por el Usuario a terceros proveedores de servicios, con los que haya suscrito acuerdos de encargo de tratamiento de datos, y que únicamente accedan a dicha información para prestar un servicio en favor y por cuenta del Responsable.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          6. RETENCIÓN DE DATOS
        </Heading>
        <Text mb={4}>
          EMPRESA informa al Usuario que, como prestador de servicio de alojamiento de datos y en virtud de lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), retiene por un período máximo de 12 meses la información imprescindible para identificar el origen de los datos alojados y el momento en que se inició la prestación del servicio.
        </Text>
        <Text mb={4}>
          La retención de estos datos no afecta al secreto de las comunicaciones y solo podrán ser utilizados en el marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a disposición de los jueces y/o tribunales o del Ministerio que así los requiera.
        </Text>
        <Text mb={4}>
          La comunicación de datos a las Fuerzas y Cuerpos de Seguridad del Estado se hará en virtud de lo dispuesto por la normativa sobre protección de datos personales y bajo el máximo respeto a la misma.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          7. PROTECCIÓN DE LA INFORMACIÓN ALOJADA
        </Heading>
        <Text mb={4}>
          El Responsable del Tratamiento adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.
        </Text>
        <Text mb={4}>
          Si bien el Responsable realiza copias de seguridad de los contenidos alojados en sus servidores, no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los Usuarios. De igual manera, no garantiza la reposición total de los datos borrados por los Usuarios, ya que los citados datos podrían haber sido suprimidos y/o modificados durante el período de tiempo transcurrido desde la última copia de seguridad.
        </Text>
        <Text mb={4}>
          Los servicios facilitados o prestados a través de la Aplicación, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados en las copias de seguridad realizadas por el Responsable del Tratamiento, cuando esta pérdida sea imputable al usuario; en este caso, se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario. La reposición de datos borrados solo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a causas atribuibles al Responsable.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          8. EJERCICIO DE DERECHOS
        </Heading>
        <Text mb={4}>
          EMPRESA informa al Usuario de que le asisten los derechos de acceso, rectificación, limitación, supresión, oposición y portabilidad, los cuales podrá ejercitar mediante petición dirigida al correo electrónico: _____________________________.
        </Text>
        <Text mb={4}>
          Asimismo, el Usuario tiene derecho a revocar el consentimiento inicialmente prestado, y a interponer reclamaciones de derechos frente a la Agencia Española de Protección de Datos (AEPD).
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          9. COMUNICACIONES COMERCIALES POR VÍA ELECTRÓNICA
        </Heading>
        <Text mb={4}>
          En aplicación de la LSSI (Ley de Servicios de la Sociedad de la Información), EMPRESA no enviará comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.
        </Text>
        <Text mb={4}>
          En el caso de usuarios con los que exista una relación contractual, jurídica o de servicios previa, el Responsable del Tratamiento está autorizado al envío de comunicaciones comerciales referentes a productos o servicios del Responsable que sean similares a los que inicialmente fueron objeto de contratación con el cliente.
        </Text>
        <Text mb={4}>
          En caso de que el Usuario quiera darse de baja a la hora de recibir las citadas comunicaciones, podrá hacerlo remitiendo su voluntad por e-mail al correo electrónico: ____________________________________.
        </Text>
      </Flex>
    </Flex>
  )
}
