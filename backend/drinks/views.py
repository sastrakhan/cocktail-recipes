from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DrinksSerializer
from .models import Drinks


class DrinksView(viewsets.ModelViewSet):
    serializer_class = DrinksSerializer
    queryset = Drinks.objects.all()
