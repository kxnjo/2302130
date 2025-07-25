FROM node:alpine

RUN apk add --no-cache tini git \
    && yarn global add git-http-server \
    && adduser -D -g git git

USER git
WORKDIR /home/git

# Initialize a bare Git repository
RUN git config --global user.name "Lau Xin Hui" \
 && git config --global user.email "2302130@sit.singaporetech.edu.sg"

RUN git init --bare repository.git

ENTRYPOINT ["tini", "--", "git-http-server", "-p", "8888", "/home/git"]
