import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";

export const MentionsLegales = () => (
  <>
    <Seo
      title="Mentions légales | Signature Van"
      description="Mentions légales du site Signature Van — artisan aménageur et loueur de vans à Chapeiry (Haute-Savoie)."
      path="/mentions-legales"
    />
    <PageHeader eyebrow="Légal" title={<>Mentions <em className="italic">légales</em>.</>} />
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-3xl prose-styles">
        <article className="space-y-10 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Éditeur du site</h2>
            <p>
              Signature Van — Entreprise individuelle<br />
              Atelier&nbsp;: 74540 Chapeiry, Haute-Savoie<br />
              SIRET&nbsp;: 000 000 000 00000<br />
              Email&nbsp;: contact@signaturevan.fr<br />
              Téléphone&nbsp;: +33 6 00 00 00 00<br />
              Directeur de la publication&nbsp;: [Prénom Nom]
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Hébergement</h2>
            <p>Le site est hébergé par&nbsp;: [Nom de l'hébergeur, adresse, contact].</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, photos, illustrations, logos) sont la propriété
              exclusive de Signature Van, sauf mention contraire. Toute reproduction, même partielle, est interdite
              sans autorisation écrite préalable.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Responsabilité</h2>
            <p>
              Signature Van s'efforce d'assurer l'exactitude des informations diffusées sur le site mais ne saurait
              être tenu responsable d'éventuelles erreurs ou omissions.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Crédits</h2>
            <p>Conception et développement : Signature Van. Photographies : © Signature Van.</p>
          </div>
        </article>
      </div>
    </section>
  </>
);

export const Confidentialite = () => (
  <>
    <Seo
      title="Politique de confidentialité | Signature Van"
      description="Politique de confidentialité et gestion des données personnelles du site Signature Van — conformité RGPD."
      path="/confidentialite"
    />
    <PageHeader eyebrow="Légal" title={<>Politique de <em className="italic">confidentialité</em>.</>} />
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-3xl">
        <article className="space-y-10 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Données collectées</h2>
            <p>
              Le formulaire de contact collecte uniquement les données nécessaires à votre demande&nbsp;:
              nom, email, téléphone (facultatif), type de projet et message.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Finalité</h2>
            <p>
              Ces données servent uniquement à vous recontacter et à traiter votre demande. Elles ne sont
              jamais cédées ni revendues à des tiers.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Durée de conservation</h2>
            <p>
              Vos données sont conservées au maximum 3 ans à compter de notre dernier échange,
              conformément aux recommandations de la CNIL.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Cookies</h2>
            <p>
              Ce site n'utilise aucun cookie de tracking publicitaire. Seuls des cookies techniques strictement
              nécessaires au bon fonctionnement du site peuvent être utilisés.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Vos droits (RGPD)</h2>
            <p>
              Vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos
              données. Pour les exercer, écrivez-nous à&nbsp;
              <a href="mailto:contact@signaturevan.fr" className="underline">contact@signaturevan.fr</a>.
            </p>
          </div>
        </article>
      </div>
    </section>
  </>
);
