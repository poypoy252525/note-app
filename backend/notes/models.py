from django.db import models

class Note(models.Model):
    title = models.CharField()
    content = models.TextField()
    category = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    