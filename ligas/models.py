from django.db import models

# Create your models here.

class Equipos(models.Model):
    nombre = models.CharField(max_length=100)
    uniforme_color = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre