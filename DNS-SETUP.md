# Equipt — GitHub Pages DNS setup

Host: GitHub Pages
Repository: https://github.com/paladins-admin/equipt.church
Custom domain: www.equipt.church

GitHub Pages must first be enabled in repository Settings → Pages, using GitHub Actions. Set the custom domain to www.equipt.church. The current GitHub plan requires this repository to be public, or a plan upgrade to retain private source.

In GoDaddy → equipt.church → DNS, use TTL 1 hour:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | paladins-admin.github.io |

Replace existing website A records and update the www CNAME rather than adding a duplicate. Remove conflicting website AAAA records if they point elsewhere. Keep email MX, SPF, DKIM and DMARC records.

These supersede the previously supplied Sites records. Do not use custom-domains.chatgpt.site, 162.159.143.30, or 172.66.3.26. The _openai-site-verification and _cf-custom-hostname TXT entries supplied earlier are not required by GitHub Pages and may be removed if added solely for this site.

After DNS verification, enable Enforce HTTPS in GitHub Pages settings once certificate provisioning completes. Correct apex and www DNS records let GitHub redirect equipt.church to www.equipt.church.

Pushes to main automatically build, validate, and deploy. Pull requests build and validate without publishing.

Source: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
