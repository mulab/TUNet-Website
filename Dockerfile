FROM mulab/nginx
MAINTAINER mulab.thu@gmail.com

ADD .
COPY default /etc/nginx/sites-enabled/default
