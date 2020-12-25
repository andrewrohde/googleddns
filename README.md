# Environment Variables

    DDNS_DOMAIN
    DDNS_USERNAME
    DDNS_PASSWORD
    DDNS_FREQUENCY_MIN

# Run command

    docker run -e DDNS_DOMAIN={your DDNS domain} -e DDNS_PASSWORD={your DDNS password} -e DDNS_USERNAME={your DDNS username} -e DDNS_FREQUENCY_MIN={number of minutes for CRON job} -d atrohde/googleddns


# Update Frequncy

DDNS_FREQUENCY_MIN is inserted in the crontab file for the number of minutes between runs. 