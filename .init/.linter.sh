#!/bin/bash
cd /home/kavia/workspace/code-generation/learner-pathway-lms-252592-253067/lms_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

