printenv | grep 'DDNS' >> /etc/environment

echo "SHELL=/bin/bash" >> /etc/cron.d/googleddns-cron
echo "PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin" >> /etc/cron.d/googleddns-cron
echo "*/$DDNS_FREQUENCY_MIN * * * * root node /googleddns/googleddns.js >> /var/log/cron.log 2>&1" >> /etc/cron.d/googleddns-cron

chmod 0644 /etc/cron.d/googleddns-cron

cron -f