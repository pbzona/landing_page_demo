from dotenv import load_dotenv
load_dotenv()

import os
import random
import time

from user import User

import ldclient
from ldclient.config import Config

# Setup client
ld_sdk_key = os.environ.get('LD_SDK_KEY')
ldclient.set_config(Config(ld_sdk_key))
ld_client = ldclient.get()

# Send an event for a new random context
def send_event_data():
    user = User()
    
    flag_enabled = ld_client.variation("experiment-registration-button-color", user.context, False)
    user.set_variation(flag_enabled)
    
    if user.clicked:
        ld_client.track('registration_button_clicked', user.context)
    
    user.debug()

# Send a lot of events for a bunch of random contexts
def create_fake_data():
    for i in range(random.randint(10, 40)):
        send_event_data()

# Loop over a couple times to send several delayed iterations of fake data
number_of_iterations = 25

for i in range(number_of_iterations):
    time_to_wait = random.randint(25, 45)
    
    create_fake_data()
    print(f'Finished iteration: {i}')
    
    time.sleep(time_to_wait)

ld_client.close()
