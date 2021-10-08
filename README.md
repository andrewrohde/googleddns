# Environment Variables

    DDNS_DOMAIN - Google Domains DDNS domain
    DDNS_USERNAME - Google Domains DDNS username
    DDNS_PASSWORD - Google Domains DDNS password
    DDNS_FREQUENCY_MIN - Cron job frequency

# Run command

    docker run -e DDNS_DOMAIN={your DDNS domain} -e DDNS_PASSWORD={your DDNS password} -e DDNS_USERNAME={your DDNS username} -e DDNS_FREQUENCY_MIN={number of minutes for CRON job} --restart always --name googleddns -d atrohde/googleddns


# Update Frequncy

DDNS_FREQUENCY_MIN is inserted in the crontab file for the number of minutes between runs. 