from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=128, null=True)

    def __str__(self):
        return self.title
