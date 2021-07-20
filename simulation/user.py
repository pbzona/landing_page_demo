import random
import uuid

class User:
    def __init__(self):
        self.id = uuid.uuid4()
        self.beta = False
        self.state = None
        self.variation = None
        self.clicked = False
        self.context = {}
        
        self.create_context()
    
    def create_context(self):
        # Calculate whether part of the beta group
        beta_probability = 15 # Percentage chance the user ends up in part of the beta group
        
        if random.randint(0, 100) < beta_probability:
            self.beta = True
            
        # Calculate chance this user clicks the button, to be compared against threshold
        low_end = random.randint(5, 10)
        high_end = random.randint(12, 25)
        click_chance = random.randint(low_end, high_end)
        
        if random.randint(0, 100) < click_chance:
            self.clicked = True
        
        # Choose a random state
        state_names = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]
        self.state = random.choice(state_names)
        
        self.context = {
            "key" : self.id,
            "country" : "USA",
            "custom" : {
                "state" : self.state,
                "beta": self.beta
            }
        }
    
    def set_variation(self, value):
        self.variation = value
    
    def debug(self):
        print("==========")
        print("ID: ", self.id)
        print("Beta: ", self.beta)
        print("State: ", self.state)
        print("Clicked:", self.clicked)
        print("Variation: ", self.variation)
        print("==========")