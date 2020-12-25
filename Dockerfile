FROM node

RUN apt-get update && apt-get install -y apt-utils cron

COPY googleddns.js /googleddns/

COPY fileReadWrite.js /googleddns/

COPY start.sh /googleddns/

RUN touch /var/log/cron.log

CMD /googleddns/start.sh
