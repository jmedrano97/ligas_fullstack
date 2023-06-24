from rest_framework import viewsets
from .models import  Equipos
from .serializer import EquiposSerializer

class EquiposViewSet(viewsets.ModelViewSet):
    serializer_class = EquiposSerializer
    queryset = Equipos.objects.all()