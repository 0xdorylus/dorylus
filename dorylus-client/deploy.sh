#!/bin/bash
git commit -m "deploy" -a
yarn build
cd ..
rm -f dist.tgz
tar zcf dist.tgz dist
scp -i /Users/mac/.ssh/db.pem dist.tgz ubuntu@35.79.248.123:/deploy/dorylus/front
ssh -i  /Users/mac/.ssh/db.pem ubuntu@35.79.248.123 "/deploy/dorylus/front/online.sh"