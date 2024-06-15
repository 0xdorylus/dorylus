#!/bin/bash
git commit -m "new data" -a
cd /Users/mac/0xbot/dorylus
rm -f dist.tgz
rm -rf dist
cd /Users/mac/0xbot/dorylus/dorylus-client
yarn build
cd /Users/mac/0xbot/dorylus
tar zcf dist.tgz dist
scp -i ~/.ssh/db.pem dist.tgz ubuntu@35.79.248.123:/deploy/dorylus/front
ssh -i /Users/mac/.ssh/db.pem ubuntu@35.79.248.123 "/deploy/dorylus/front/online.sh"

