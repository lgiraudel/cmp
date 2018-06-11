/**
 * The default set of translated pieces of text indexed by locale.
 * Values from window.__cmp.config.localization will override these
 * per locale.  Empty values will use the english value provided
 * inline in each component.
 */
export default {
	en: {
		intro: {
			title: '',
			description: '',
			acceptAll: '',
			rejectAll: '',
			showPurposes: ''
		},
		details: {
			title: '',
			back: '',
			save: ''
		},
		purposes: {
			active: '',
			inactive: '',
			showVendors: '',
			cookies: {
				menu: '',
				title: '',
				description: ''
			},
			purpose1: {
				description: 'Allow storing or accessing information on a user&apos;s device.'
			},
			purpose2: {
				description: `Allow processing of a user&apos;s data to provide and inform personalised advertising (including delivery, measurement, and reporting) based on a user&apos;s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices  for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user&apos;s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user&apos;s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose3: {
				description: `Allow processing of a user&apos;s data to deliver content or advertisements and measure the delivery of such content or advertisements, extract insights and generate reports to understand service usage; and/or accessing or storing information on devices for that purpose.  
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user&apos;s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user&apos;s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose4: {
				description: `Allow processing of a user&apos;s data to provide and inform personalised content (including delivery, measurement, and reporting) based on a user&apos;s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices for that purpose.  
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user&apos;s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user&apos;s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			customPurpose1: {
				menu: '',
				title: '',
				description: ''
			}
		},
		vendors: {
			title: '',
			rejectAll: '',
			acceptAll: '',
			company: '',
			offOn: '',
			description: '',
			moreChoices: ''
		},
		footer: {
			message: '',
			consentLink: ''
		}
	},
	de: {
		intro: {
			title: 'Diese Website verwendet Cookies',
			description: 'Wir und unsere Partner verwenden sogenannte Cookies (kleine Textdateien) im Webbrowser um zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können. Zukünftig benötigen wir wahrscheinlich ihr/euer Einverständnis dazu. Ein Beispiel, wie dies aussehen könnte, finden sie/findet ihr unter dieser Erklärung ',
			acceptAll: 'Alle Cookies akzeptieren',
			rejectAll: 'Alle Cookies ablehnen',
			showPurposes: 'Verwendungszwecke zeigen'
		},
		details: {
			title: 'Datenschutzeinstellungen',
			back: 'Abbrechen',
			save: 'Sichern und Beenden'
		},
		purposes: {
			active: 'Aktiv',
			inactive: 'Inaktiv',
			showVendors: '',
			cookies: {
				menu: 'Wie wir Cookies einsetzen',
				title: 'Diese Website verwendet Cookies',
				description: 'Unsere Partner und wir setzen Cookies (kleine Textdateien) und sammeln Informationen während des Surfens im Web in diesem Browser. Dies dient dazu zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können.'
			},
			purpose1: {
				menu: 'Zugriff auf ein Gerät',
				title: 'Zugriff auf ein Gerät',
				description: 'Die Erlaubnis zum Speichern und Abrufen von Informationen auf dem Gerät eines Website-Besuchers.Das ist notwendig, um Cookies im Web-Browser zu speichern und zur Anzeige relevanter Informationen und Werbung abrufen zu können.'
			},
			purpose2: {
				menu: 'Persönlich angepaßte Werbung',
				title: 'Persönlich angepaßte Werbung',
				description: 'Die Erlaubnis, Besucherdaten so zu verarbeiten und/oder zu speichern und abzurufen, dass persönlich angepaßte Werbung angeboten und angezeigt werden kann (dies umfaßt die Auslieferung, Messung und die Erstellung von Berichten darüber). Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			},
			purpose3: {
				menu: 'Analysen',
				title: 'Analysen',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von Inhalten oder Werbung zu verarbeiten, und zur Messung der Auslieferung solcher Inhalte oder Werbung. Umfasst ist die Gewinnung von Erkenntnissen und die Generierung von Berichten um die Nutzung des angebotenen Service zu verstehen, und/oder das Abrufen oder Speichern von Informationen auf Geräten zu diesem Zweck.'
			},
			purpose4: {
				menu: 'Persönlich angepasste Inhalte',
				title: 'Persönlich angepasste Inhalte',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von personalisierten Inhalten zu verarbeiten, und zur Messung der Auslieferung. Umfasst ist die Gewinnung von Erkenntnissen darüber und die Generierung von Berichten dazu. Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			}
		},
		vendors: {
			title: 'Unsere Partner',
			rejectAll: 'Alle ablehnen',
			acceptAll: 'Alle akzeptieren',
			company: 'Unternehmen',
			offOn: 'Aus/An',
			description: 'Helfen Sie uns, Ihnen einen besseren Service zu bieten! Unsere Partner verwenden Cookies Ihres Browsers, um quer durch das Web zu verstehen, was Sie interessiert und Ihnen entsprechend relevante Inhalte und Werbung anzubieten.',
			moreChoices: 'Weitere Auswahlmöglichkeiten'
		},
		footer: {
			message: 'Du kannst deine Datenschutz-Einstellungen bearbeiten',
			consentLink: 'hier'
		}
	},
	fr: {
		intro: {
			title: 'Merci de votre visite sur ',
			description: 'Afin de financer la cr&eacute;ation de contenu de qualit&eacute;, nous et certains services tiers d&eacute;posons des cookies et stockons ou acc&eacute;dons &agrave; des donn&eacute;es sur votre appareil pour de multiples raisons. Certains services tiers collectent &eacute;galement des donn&eacute;es afin de vous montrer un contenu et des publicit&eacute;s personnalis&eacute;s. Certains de ces services requi&egrave;rent votre consentement pour collecter et utiliser vos donn&eacute;es.',
			acceptAll: 'J\'accepte',
			rejectAll: 'Je refuse',
			showPurposes: 'Voir les d&eacute;tails'
		},
		details: {
			title: 'Pr&eacute;f&eacute;rences utilisateur',
			back: 'Retour',
			save: 'Sauver et quitter'
		},
		purposes: {
			active: 'Activ&eacute;',
			inactive: 'D&eacute;sactiv&eacute;',
			showVendors: 'Voir la liste des partenaires',
			cookies: {
				menu: 'Utilisation des cookies',
				title: 'Ce site utilise des cookies',
				description: 'Nos partenaires et nous &eacute;tablissons des cookies (petits fichiers texte) et recueillons des informations pendant votre navigation sur le Web dans ce navigateur. Ces informations servent &agrave; comprendre vos centres d\'int&eacute;r&ecirc;t et vous proposer un contenu et des publicit&eacute;s pertinents.'
			},
			purpose1: {
				menu: 'Stockage d\'informations et acc&egrave;s',
				title: 'Stockage d\'informations et acc&egrave;s',
				description: 'Autoriser le stockage d&apos;informations ou l&apos;acc&egrave;s &agrave; des informations d&eacute;j&agrave; stock&eacute;es sur votre appareil, telles que des identifiants publicitaires, des identifiants de dispositif, des cookies et des technologies similaires.'
			},
			purpose2: {
				menu: 'Personnalisation',
				title: 'Personnalisation',
				description: 'Autoriser la collecte et le traitement d&apos;informations sur votre utilisation de ce service pour ensuite personnaliser la publicit&eacute; et/ou le contenu qui vous sont propos&eacute;s dans d&apos;autres contextes, tels que sur d&apos;autres sites ou applications, au fil du temps. En r&egrave;gle g&eacute;n&eacute;rale, le contenu du site ou de l&apos;application est utilis&eacute; pour d&eacute;terminer vos centres d&apos;int&eacute;r&ecirc;t et permettent de d&eacute;terminer le choix de la publicit&eacute; et/ou du contenu.'
			},
			purpose3: {
				menu: 'S&eacute;lection d\'annonces, diffusion, rapport',
				title: 'S&eacute;lection d\'annonces, diffusion, rapport',
				description: 'Autoriser le traitement des donn&eacute;es d\'un utilisateur pour fournir du contenu ou des publicit&eacute;s et mesurer la diffusion de ces contenus ou publicit&eacute;s, extraire des informations et g&eacute;n&eacute;rer des rapports pour comprendre l\'utilisation des services; et / ou acc&eacute;der ou stocker des informations sur des dispositifs &agrave; cette fin.'
			},
			purpose4: {
				menu: 'S&eacute;lection de contenu, diffusion, rapport',
				title: 'S&eacute;lection de contenu, diffusion, rapport',
				description: 'Autoriser le traitement des donn&eacute;es d\'un utilisateur pour la cr&eacute;ation de contenu personnalis&eacute; (y compris la diffusion, l\'analyse et la cr&eacute;ation de rapports) en fonction des pr&eacute;f&eacute;rences ou des int&eacute;r&ecirc;ts d\'un utilisateur connus ou inf&eacute;rer &agrave; partir de donn&eacute;es collect&eacute;es sur plusieurs sites, applications ou appareils; et / ou acc&eacute;der ou stocker des informations sur des dispositifs &agrave; cette fin.'
			},
			purpose5: {
				menu: 'Mesures',
				title: 'Mesures',
				description: 'Autoriser la collecte d&apos;informations sur votre utilisation du contenu et la combinaison avec des informations pr&eacute;c&eacute;demment collect&eacute;es, utilis&eacute;es pour mesurer, comprendre et rendre compte de votre utilisation du service. Cela n&apos;inclut pas la personnalisation, la collecte d&apos;informations sur votre utilisation de ce service pour personnaliser ult&eacute;rieurement le contenu et/ou la publicit&eacute; dans d&apos;autres contextes, par exemple sur d&apos;autres services, tels que des sites ou des applications.'
			},
			customPurpose1: {
				menu: 'Publicit&eacute;s personnalis&eacute;es par Google',
				title: 'Publicit&eacute;s personnalis&eacute;es par Google',
				description: ''
			}
		},
		vendors: {
			title: 'Nos partenaires',
			rejectAll: 'Tout refuser',
			acceptAll: 'Tout accepter',
			company: 'Soci&eacute;t&eacute;',
			offOn: 'Autoriser',
			description: 'Aidez-nous &agrave; vous fournir une meilleur exp&eacute;rience utilisateur ! Nos partenaires d&eacute;posent des cookies et collectent des informations depuis votre navigateur pour vous fournir un meilleur contenu, des publicit&eacute;s pertinentes ainsi que pour analyser l\'audience globale du site',
			moreChoices: 'Choisir les partenaires'
		},
		footer: {
			message: '',
			consentLink: ''
		}
	}
};
