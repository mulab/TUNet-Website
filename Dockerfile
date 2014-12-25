FROM mulab/nginx
MAINTAINER mulab.thu@gmail.com

ADD . /data
COPY default /etc/nginx/sites-enabled/default
