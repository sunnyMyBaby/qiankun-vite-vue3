FROM registry.sensetime.com/operation-ocb/tools/nginx:v1.19.2

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo 'Asia/Shanghai' > /etc/timezone && \
    chown -R 1000:2000 /var/cache/nginx && \
    chown -R 1000:2000 /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R 1000:2000 /var/run/nginx.pid && \
    rm -rf /etc/nginx/conf.d/* && \
    mkdir -p /app/dist
    
ADD ./dist /app/dist
